const mongoose = require('mongoose');
module.exports = mongoose.model('Book', new mongoose.Schema({
  title: String, author: String, description: String
}));