const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../database/models/users');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

// passport#160
passport.deserializeUser((id, done) => {
  User.findOne({ _id: id })
    .then((user) => done(null, user));
});

passport.use(new LocalStrategy(
  async (username, password, done) => {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.hashedPassword)) done(null, user);
    else done(null, false, { message: 'Invalid credentials' });
  },
));

module.exports = passport;
