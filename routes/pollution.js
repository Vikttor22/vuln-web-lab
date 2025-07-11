const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const role = req.query.role;
  if (Array.isArray(role) && role.includes('admin')) {
    res.send('Admin Access Granted');
  } else {
    res.send('Normal User');
  }
});

module.exports = router;