const express = require('express'),
      router = express.Router();

// INDEX
router.get('/', function(req, res) {
  res.redirect('/cities');
});

router.get('/cities', (req, res) => {
  res.render('views/index');
});

// NEW - GET

// CREATE - POST

// SHOW - GET

// EDIT - GET

// UPDATE - PUT

// DELETE - DELETE

module.exports = router;
