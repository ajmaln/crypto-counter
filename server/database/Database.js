const mongoose = require('mongoose');
const User = require('./models/users');

class Database {
  constructor() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}-gg0gq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
      useCreateIndex: true,
      useNewUrlParser: true,
    })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error: ', err);
      });
  }
}

module.exports = Database;
