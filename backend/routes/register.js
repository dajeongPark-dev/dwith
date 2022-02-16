var express = require('express');
let mysql = require('mysql');
let crypto = require('crypto');

const db_config = require('../src/db-config');
var router = express.Router();

/* 회원가입 처리 부분 */
router.post('/register', (req, res) => { // Sign Up request
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

module.exports = router;
