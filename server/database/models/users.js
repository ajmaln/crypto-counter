const mongoose = require('mongoose');
const Crypto = require('./crypto');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    default: null,
  },
  crypto: Crypto.schema,
});

module.exports = mongoose.model('User', userSchema);
