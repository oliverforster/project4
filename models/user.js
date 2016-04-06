var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  facebookId: String,
  tvHistory: [],
  foodHistory: []
});

module.exports = mongoose.model('User', userSchema);
