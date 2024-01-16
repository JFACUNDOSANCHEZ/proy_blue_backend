import express from "express";
import pg from "pg";
import { config } from "dotenv";
import getUserId from "./src/controllers/postLogin"

config();

const app = express();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

// app.get('/hola', async (req, res) => {
//     const result = await pool.query('SELECT NOW()');
//     return res.json(result.rows[0]);
// });


app.get('/', (getUserIds) )

app.get('/pong', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      return res.json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});