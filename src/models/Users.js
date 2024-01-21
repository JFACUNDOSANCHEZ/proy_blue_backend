const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
      allowNull: false
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'nombre_de_la_tabla_users', // Reemplaza 'nombre_de_la_tabla_users' con el nombre real de tu tabla Users
    timestamps: true
  });

  return User;
};