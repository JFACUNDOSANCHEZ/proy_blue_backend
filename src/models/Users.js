const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
  
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING,
   
    },

    img: {
      type: DataTypes.STRING,
   
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    pendiente: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: 'nombre_de_la_tabla_users', // Reemplaza 'nombre_de_la_tabla_users' con el nombre real de tu tabla Users
    timestamps: true
  });

  return User;
};