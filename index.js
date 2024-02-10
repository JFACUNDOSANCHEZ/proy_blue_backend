const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/sequelize');  // Aquí se define `sequelize`
const server = require('./src/server');

dotenv.config();
const app = express();

// Resto del código...

sequelize.sync({ force: true })
  .then(() => {
    const { User,  Passeger } = require('./config/sequelize');
    console.log('Tablas sincronizadas');

    // Log de nombres de tablas
    console.log('Nombre de la tabla User:' , User.tableName);

    console.log('Nombre de la tabla Passeger:' , Passeger.tableName);
    // Resto del código...
    app.use(server);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar tablas:', error);
  });