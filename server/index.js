require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');

const authRouter = require('./routes/auth');
const registerRouter = require('./routes/register');

const app = express();
const server = http.createServer(app);

const Database = require('./database/Database');

const db = new Database();

//* Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//* Routes
app.use('/auth', authRouter);
app.use('/register', registerRouter);

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
