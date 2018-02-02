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
      res.redirect('/cities');
    } else {
      res.render('views/show', {city: city});
    }
  });
});

// EDIT - GET
router.get('/cities/:id/edit', (req, res) => {
  City.findById(req.params.id, function(err, city) {
    if (err) {
      console.log(err);
      res.redirect('/cities');
    } else {
      console.log(city);
      res.render('views/edit', {city: city});
    }
  });
});

// UPDATE - PUT
router.put('/cities/:id', (req, res) => {
  City.findByIdAndUpdate(req.params.id, req.body.city, function(err, city) {
    if (err) {
      console.log(err);
      res.redirect('/cities');
    } else {
      console.log(city);
      res.redirect('/cities/' + city._id);
    }
  });
});

// DELETE - DELETE

module.exports = router;
