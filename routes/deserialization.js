const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const payload = req.cookies.payload;
  try {
    const obj = eval('(' + payload + ')');
    if (obj && obj.role === 'admin') {
      return res.send('Welcome Admin!');
    }
    res.send('Welcome User');
  } catch {
    res.send('Invalid payload');
  }
});

router.get('/set', (req, res) => {
  res.cookie('payload', JSON.stringify({ role: 'user' }));
  res.redirect('/deser');
});

module.exports = router;