const mongoose = require('mongoose');

class Database {
  constructor() {
    const {
      DB_USER,
      DB_PASS,
      DB_CLUSTER,
      DB_NAME,
    } = process.env;
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.nppgy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
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
