const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'shortly',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
};
