const mongoose = require('mongoose');
const Crypto = require('./crypto');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  crypto: Crypto.schema,
});

module.exports = mongoose.model('User', userSchema);
