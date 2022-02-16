let express = require('express');
let mysql = require('mysql');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let crypto = require('crypto');

const db_config = require('../src/db-config');
let router = express.Router();

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

router.options('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 
    'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send();
});

router.post('/login', (req, res, next) => { // When a login request is received
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

router.post('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
