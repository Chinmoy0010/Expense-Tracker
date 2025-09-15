const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME || 'budget_tracker';
const username = process.env.DB_USER || 'user';
const password = process.env.DB_PASS || 'password';
const host = process.env.DB_HOST || 'localhost';
const dialect = process.env.DB_DIALECT || 'sqlite'; // or 'postgres'

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  storage: dialect === 'sqlite' ? './database.sqlite' : undefined,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = {
  sequelize,
  connectDB,
};