let express = require('express');
let mysql = require('mysql');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let crypto = require('crypto');

const db_config = require('../src/db-config');
let router = express.Router();

// Passport.js 기본 로그인 확인 전략 설정
passport.use(new LocalStrategy(
  function (username, password, done) {
    let db = mysql.createConnection(db_config);
    db.connect();
    // Get user data from DB to check password
    db.query('SELECT * FROM user WHERE username=?', [username], (err, results) => {
      if (err) { return done(err); }
      if (!results[0]) { // Wrong username
        db.end();
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      else {
        db.end();
        let user = results[0];
        const [encrypted, salt] = user.password.split("$"); // splitting password and salt
        crypto.pbkdf2(password, salt, 65536, 64, 'sha512', (err, derivedKey) => { // Encrypting input password
          if (err) { return done(err); }
          if (derivedKey.toString("hex") === encrypted) // Check its same
          {
            console.log("login success");
            return done(null, user);
          }
          else
            return done(null, false, { message: 'Incorrect username or password.' });
        });//pbkdf2
      }
    });//query
  }
));

// passport.js의 세션 확인 부분 설정
passport.serializeUser(function (user, done) { // passport.js serializing
  console.log('serialize user');
  done(null, user.username);
});

passport.deserializeUser(function (username, done) { // passport.js deserializing with checking Data Existence
  let db = mysql.createConnection(db_config);
  db.connect();
  console.log('deserialize user');
  db.query('SELECT * FROM user WHERE username=?', [username], function (err, results) {
    if (err)
      return done(err, false);
    if (!results[0])
      return done(err, false);
    db.end();
    return done(null, results[0]);
  });
});


// login 전에 options요청 처리 (없으면 cors 에러남)
router.options('/login', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send();
});


// 로그인 처리 부분
router.post('/login', 
  passport.authenticate('local')
);

// 로그아웃 처리
router.post('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
