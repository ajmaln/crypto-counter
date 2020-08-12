const express = require('express');
const validator = require('validator');
const User = require('../database/models/users');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    username, coin, symbol, quantity, price, purchaseDate,
  } = req.body;

  if (!coin || !symbol) return res.status(400).send('Select a cryptocurrency');
  if ((typeof quanity === 'number') || (typeof quantity === 'string' && !validator.isNumeric(quantity))) return res.status(400).send('Quantity must be a number');
  if ((typeof price === 'number') || (typeof price === 'string' && !validator.isNumeric(price))) return res.status(400).send('Price must be a number');

  const filter = { username };
  const user = await User.findOne(filter);

  if (user) {
    await user.coins.push({
      coin, symbol, quantity, price, purchaseDate,
    });
    const newUser = await user.save();
    return res.status(201).json({ coins: newUser.coins });
  }
  return res.status(400).end();
});

module.exports = router;
