const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/cities');     // Mongoose connection

// City schema
/*
  name
  state
  population
  image
  date_created
*/
var citySchema = new mongoose.Schema({
  name: String,
  state: String,
  population: Number,
  image: String,
  date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('City', citySchema);;
