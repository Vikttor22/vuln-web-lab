const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
  res.send('<form method="POST"><input name="url" value="http://localhost:3001/secret"/><button>Fetch</button></form>');
});

router.post('/', async (req, res) => {
  try {
    const r = await fetch(req.body.url);
    const txt = await r.text();
    res.send('<pre>' + txt + '</pre>');
  } catch (e) {
    res.send('Error: ' + e.message);
  }
});

module.exports = router;