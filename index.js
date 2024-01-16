const server = require( './server' );
const pg =require("pg")
const {config} = require("dotenv");


config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});



// server.get('/', (req, res) => {
//     res.send('Hola mundo'); 
// });

// server.get('/pong', async (req, res) => {
//     try {
//       const result = await pool.query('SELECT NOW()');
//       return res.json(result.rows[0]);
//     } catch (error) {
//       console.error('Error executing query:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


  server.listen(3000, () => {
    console.log('Server listening on port 3000');
});