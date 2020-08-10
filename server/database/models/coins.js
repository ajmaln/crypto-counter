const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  coin: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Coins', userSchema);
