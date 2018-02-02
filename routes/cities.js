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
router.get('/cities/new', (req, res) => {
  res.render('views/new');
});

// CREATE - POST
router.post('/cities', (req, res) => {
  City.create(req.body.city, function(err, city) {
    if (err) {
      console.log(err);
    } else {
      console.log(city);
      res.redirect('/cities');
    }
  });
});

// SHOW - GET
router.get('/cities/:id', (req, res) => {
  City.findById(req.params.id, function(err, city) {
    if (err) {
      console.log(err);
    } else {
      res.render('views/show', {city: city});
    }
  });
});

// EDIT - GET

// UPDATE - PUT

// DELETE - DELETE

module.exports = router;
