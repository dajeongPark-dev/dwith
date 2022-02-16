
var express = require('express');

var app = express();

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let server = require('http').createServer(app);
let session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);
let passport = require('passport');
let ejs = require('ejs');
const bodyParser = require('body-parser');
const { SocketAddress } = require('net');

const db_config = require('./src/db-config');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var authRouter = require('./routes/auth');



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




app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/register', registerRouter);




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
