import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres', // or 'sqlite' if using SQLite
  logging: false,
});

const db = {
  Sequelize,
  sequelize,
  User: require('./User')(sequelize, Sequelize),
  Transaction: require('./Transaction')(sequelize, Sequelize),
  Budget: require('./Budget')(sequelize, Sequelize),
};

// Associations
db.User.hasMany(db.Transaction);
db.Transaction.belongsTo(db.User);
db.User.hasMany(db.Budget);
db.Budget.belongsTo(db.User);

export default db;