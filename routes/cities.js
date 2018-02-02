const express = require('express'),
      router = express.Router(),
      City = require('../models/cityModel');

// INDEX
router.get('/', function(req, res) {
  res.redirect('/cities');
});

router.get('/cities', (req, res) => {
  City.find({}, function(err, cities) {
    if (err) {
      console.log(err);
    }
    res.render('views/index', {cities: cities});
  });
});

// NEW - GET

// CREATE - POST

// SHOW - GET

// EDIT - GET

// UPDATE - PUT

// DELETE - DELETE

module.exports = router;
