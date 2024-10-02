// Mongoose Model for AppUser, which will be used to log into device and access ESSUsers details
const mongoose = require('mongoose');

// The User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  ori: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model('User', userSchema);

// Exports
module.exports = User;