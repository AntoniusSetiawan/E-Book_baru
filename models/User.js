const mongoose = require('mongoose');
module.exports = mongoose.model('User', new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  favorites: [String]
}));
