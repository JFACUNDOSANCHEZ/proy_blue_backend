const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Passeger = sequelize.define('Passeger', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
   
    },
    nacionalidad: {
      type: DataTypes.STRING,
   
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // Puedes agregar otras configuraciones aquí, como timestamps, hooks, métodos, etc.
    timestamps: true,
    // Otros ajustes según tus necesidades.
  });

  // Asegúrate de devolver la instancia del modelo aquí
  return Passeger;
};