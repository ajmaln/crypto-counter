const express = require('express');
const passport = require('passport');
const validator = require('validator');

const router = express.Router();

router.get('/', async (req, res) => {
  if (req.isAuthenticated()) return res.status(200).send('yes');
  return res.status(200).send('no');
});

/**
 * Handle login requests
 */
router.post('/', async (req, res, next) => {
  const { username, password } = req.body;

  //* Validate user / pass
  if (!username) return res.status(400).json({ error: 'Enter your username' });
  if (!password) return res.status(400).json({ error: 'Enter your password' });

  //* Check valid email
  if (!validator.isEmail(username)) return res.status(400).json({ error: 'Invalid email entered' });

  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(400).json({ error: err });
    if (!user) return res.status(400).json({ error: info.message });
    // eslint-disable-next-line no-shadow
    req.logIn(user, (err) => {
      if (err) return res.status(400).send(err);
      req.user = user;
      return res.status(200).json({ message: 'Logged in' });
    });
  })(req, res, next);
});

module.exports = router;
