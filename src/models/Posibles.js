const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Posible = sequelize.define('Posible', {
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
  }, { 
    timestamps: true,
    // Puedes agregar otras configuraciones aquí, como hooks, métodos, etc.
  });

  // Puedes definir relaciones u otras configuraciones aquí si es necesario

  return Posible;
};