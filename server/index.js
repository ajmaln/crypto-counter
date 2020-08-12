require('dotenv').config();

const cors = require('cors');
const express = require('express');
const http = require('http');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');

const authRouter = require('./routes/auth');
const registerRouter = require('./routes/register');
const logoutRouter = require('./routes/logout');
const coinsRouter = require('./routes/coins');

const app = express();
const server = http.createServer(app);

const {
  DB_USER,
  DB_PASS,
  DB_CLUSTER,
  DB_NAME,
} = process.env;
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.nppgy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error: ', err);
  });

//* Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Express Session
app.use(session({
  secret: 'Crypto Counter',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

//* CORS Middleware
app.use(cors());

//* Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//* Routes
app.use('/auth', authRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);
app.use('/coins', coinsRouter);

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`Server started on port: ${port}`));

const exitHandler = (options) => {
  if (options.exit) process.exit();
};

// App is closing
process.on('exit', exitHandler.bind(null, {
  cleanup: true,
}));

// Catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {
  exit: true,
}));

// Catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {
  exit: true,
}));

process.on('SIGUSR2', exitHandler.bind(null, {
  exit: true,
}));

// Catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {
  exit: true,
}));
