const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PosibleUser = sequelize.define('PosibleUser', {
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nombre_usuario' // Nombre personalizado del campo en la base de datos
    },
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true // Asegura que el valor sea un correo electrónico válido
      }
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 20] // Asegura que la longitud de la contraseña esté entre 6 y 20 caracteres
      }
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'posibles_usuarios', // Nombre personalizado de la tabla en la base de datos
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['correoElectronico']
      }
    ],
    // Puedes agregar otras configuraciones aquí, como hooks, métodos, etc.
  });

  // Puedes definir relaciones u otras configuraciones aquí si es necesario

  return PosibleUser;
};