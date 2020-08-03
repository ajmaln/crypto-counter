const bcrypt = require('bcrypt');
const express = require('express');
const validator = require('validator');
const User = require('../database/models/users');

const router = express.Router();

/**
 * Handle login requests
 */
router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = req.body;

  const username = validator.normalizeEmail(email);

  //* Validate input
  if (!firstName || !lastName || !username || !password || !confirmPassword) return res.status(400).send('Missing field(s)');
  if (!validator.isEmail(username)) return res.status(400).send('Invalid email entered');
  if (password !== confirmPassword) return res.status(400).send('Passwords must match');
  //* Validate strong password
  if (!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%@&? "]).*$/.test(password)) return res.status(400).send('Password must contain 8 characters and at least one number, one letter and one unique character');

  //* Attempt to create the user
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      hashedPassword,
      firstName,
      lastName,
    });
    user.save();
    return res.status(201).send('User created');
  } catch (err) {
    return res.status(400).send('Failed to create user. Try again later');
  }
});

module.exports = router;
