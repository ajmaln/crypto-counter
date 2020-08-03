require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const server = require('http').createServer(app);

const database = require('./database/Database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

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
