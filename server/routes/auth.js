const bcrypt = require('bcrypt');
const express = require('express');
const validator = require('validator');
const User = require('../database/models/users');

const router = express.Router();

/**
 * Handle login requests
 */
router.post('/', async (req, res) => {
  const { user, password } = req.body;

  //* Validate user / pass
  if (!user) return res.status(400).send('Enter your username');
  if (!password) return res.status(400).send('Enter your password');

  //* Check valid email
  if (!validator.isEmail(user)) return res.status(400).send('Invalid email entered');

  //* Search for the user
  const dbUser = await User.findOne({ user });
  if (!dbUser) return res.status(404).send(`User ${user} not found`);

  //* Check the password
  const passwordValidated = await bcrypt.compare(password, dbUser.hashedPassword);
  if (passwordValidated) res.status(201).json(dbUser);
  else return res.status(403).send('Password is incorrect');

  return res.status(400).send('Something went wrong');
});

module.exports = router;
