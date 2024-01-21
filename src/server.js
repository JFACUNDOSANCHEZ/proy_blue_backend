const express = require( 'express' );
const router = require( './routes/routes' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );

//Creo una instancia de Express
const server = express();

/*-----------------------------------------------------------------------
Agrego los middlewares para utilizar
*express.urlencoded ->  Analizar los datos de las solicitudes codificadas en formato URL
*morgan( 'dev' ) -> Se utiliza para registrar informacion sobre las solicitudes HTTP y el formato dev es un formato conciso y legible diseñado para el desarrollo
*express.json -> Permite analizar el cuerpo de las solicitudes HTTP con formato JSON
*Cors -> Permitir que el servidor responda a solicitudes desde dominios distintos al propio server
------------------------------------------------------------------------*/
server.use( express.urlencoded({ extended: true }) );
server.use( morgan( 'dev' ) );
server.use( express.json() );
server.use( cors() );

server.use( router );

module.exports = server;