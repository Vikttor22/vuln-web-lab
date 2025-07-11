const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE users (id INT, username TEXT, password TEXT)");
  db.run("INSERT INTO users VALUES (1, 'admin', 'admin123')");
  db.run("INSERT INTO users VALUES (2, 'user', 'user123')");
});

router.get('/', (req, res) => {
  res.send(`<form method="POST"><input name="username"/><input name="password"/><button>Login (SQLi)</button></form>`);
});

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  db.all(query, [], (err, rows) => {
    if (rows.length > 0) {
      res.send('Welcome ' + rows[0].username);
    } else {
      res.send('Login failed');
    }
  });
});

module.exports = router;