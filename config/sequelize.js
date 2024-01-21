const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false, 
  },
});

const UserModel = require(path.join(__dirname, '../src/models/Users'));
const PosibleModel = require(path.join(__dirname, '../src/models/Posibles'));
const PosibleUsersModel = require(path.join(__dirname, '../src/models/PosibleUsers'));

const User = UserModel(sequelize);
const Posible = PosibleModel(sequelize);
const PosibleUsers = PosibleUsersModel(sequelize);

module.exports = {
  User,
  Posible,
  PosibleUsers,
  sequelize
}