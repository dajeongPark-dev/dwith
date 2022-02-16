
var express = require('express');

var app = express();

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let server = require('http').createServer(app);
let session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);
let crypto = require('crypto');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let ejs = require('ejs');
let mysql = require('mysql');
const bodyParser = require('body-parser');
const { SocketAddress } = require('net');
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

const db_config = require('./src/db-config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



app.use(require('connect-history-api-fallback')());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: false }));
app.use(session({ // Session settings
  secret: '!@#$%^&*',
  store: new MySQLStore(db_config),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 6000 * 60 * 60 // 쿠키 유효기간 6시간
  }
}));
app.use(passport.initialize()); // passport.js initialization
app.use(passport.session());


// Passport.js setting
passport.use(new LocalStrategy(
  function (username, password, done) {
    let db = mysql.createConnection(db_config);
    db.connect();
    // Get user data from DB to check password
    db.query('SELECT * FROM user WHERE username=?', [username], (err, results) => {
      if (err) return done(err);
      if (!results[0]) { // Wrong username
        db.end();
        return done('please check your username.');
      }
      else {
        db.end();
        let user = results[0];
        const [encrypted, salt] = user.password.split("$"); // splitting password and salt
        crypto.pbkdf2(password, salt, 65536, 64, 'sha512', (err, derivedKey) => { // Encrypting input password
          if (err) return done(err);
          if (derivedKey.toString("hex") === encrypted) // Check its same
          {
            console.log("login success");
            return done(null, user);
          }
          else
            return done('please check your password.');
        });//pbkdf2
      }
    });//query

  }
));
passport.serializeUser(function (user, done) { // passport.js serializing
  done(null, user.username);
});

passport.deserializeUser(function (username, done) { // passport.js deserializing with checking Data Existence
  let db = mysql.createConnection(db_config);
  db.connect();
  db.query('SELECT * FROM user WHERE username=?', [username], function (err, results) {
    if (err)
      return done(err, false);
    if (!results[0])
      return done(err, false);
    db.end();
    return done(null, results[0]);
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.options('/login', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 
  'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send();
});

app.post('/login', (req, res, next) => { // When a login request is received
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        res.status(404).json({
          isSuccess: false,
          code: "로그인 실패"
        });
        return;
      }

      if (user) {
        //const token = user.generateJwt();
        res.status(200);
        res.json({
          isSuccess: true,
          code: "로그인 성공"
        });
      } else {
        res.status(401).json({
          isSuccess: false,
          code: "로그인 실패"
        });
      }
    })(req, res, next);
  }
);


app.post('/register', (req, res) => { // Sign Up request
  let db = mysql.createConnection(db_config);
  db.connect();
  console.log(res.body)
  db.query('SELECT * FROM user WHERE username=?', [req.body.username], (err, results) => {
    if (err)
      res.json({
        isSuccess: false,
        code: "db 에러"
      }); // if error occurred
    if (!!results[0])
      res.json({
        isSuccess: false,
        code: "이미 존재하는 유저"
      }); // if error occurred
    else {
      // Encrypting password with random salt and inserting new user data in database
      const randomSalt = crypto.randomBytes(32).toString("hex");
      crypto.pbkdf2(req.body.userPassword, randomSalt, 65536, 64, "sha512", (err, encryptedPassword) => {
        const passwordWithSalt = encryptedPassword.toString("hex") + "$" + randomSalt;
        db.query(
          "insert into user(username, password, email) values(?,?,?)",
          [req.body.username, passwordWithSalt, req.body.email], (err2) => {
            db.end();
            if (err2)
              res.json({
                isSuccess: false,
                code: "에러"
              }); // if error occurred
            else
              res.json({
                isSuccess: true,
                code: "회원가입 성공"
              });
          });
      });
    }
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
server.listen(80, () => {
  console.log(`Example app listening at http://localhost:80`)
});
