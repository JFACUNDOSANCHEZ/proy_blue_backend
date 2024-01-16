const { DataTypes }=require('sequelize');

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
  }, { timestamps: true });

  return User;
};