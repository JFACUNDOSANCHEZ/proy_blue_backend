const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,  // Puedes intentar establecer esto en true o false según tu configuración
      ca: fs.readFileSync(path.resolve(__dirname, 'certificate.pem')).toString(),
      key: fs.readFileSync(path.resolve(__dirname, 'private_key.pem')).toString(),
      cert: fs.readFileSync(path.resolve(__dirname, 'certificate.pem')).toString(),
    },
  },

});

const PassegerModel = require(path.join(__dirname, '../src/models/passenger'));
const UserModel = require(path.join(__dirname, '../src/models/Users'));
const PosibleModel = require(path.join(__dirname, '../src/models/Posibles'));
const PosibleUsersModel = require(path.join(__dirname, '../src/models/PosibleUsers'));

const Passeger = PassegerModel(sequelize);
const User = UserModel(sequelize);
const Posible = PosibleModel(sequelize);
const PosibleUsers = PosibleUsersModel(sequelize);
module.exports = {
  User,
  Posible,
  PosibleUsers,
  sequelize,
  Passeger
}