const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const PosibleUser = sequelize.define('PosibleUser', {
  nombreUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: true });

module.exports = PosibleUser;