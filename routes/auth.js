const express = require('express');
const router = express.Router();

const USERS = [{ username: 'admin', password: 'admin123' }, { username: 'user', password: 'user123' }];

router.get('/login', (req, res) => {
  res.send(`<form method="POST"><input name="username"/><input name="password"/><button>Login</button></form>`);
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    res.send('Welcome ' + username);
  } else {
    res.send('Invalid login');
  }
});

module.exports = router;