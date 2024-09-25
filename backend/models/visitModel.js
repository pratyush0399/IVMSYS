// models/visitModel.js

const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  location: { type: String, required: true },
  details: { type: String, required: true }
});

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;
