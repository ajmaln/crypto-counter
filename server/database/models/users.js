const mongoose = require('mongoose');
const Coins = require('./coins');

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
  coins: [{ type: Coins.schema }],
});

module.exports = mongoose.model('User', userSchema);
