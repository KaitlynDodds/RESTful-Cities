const express = require('express'),
      router = express.Router();

// INDEX
router.get('/', function(req, res) {
  res.send('Hello, world!');
});

module.exports = router;
