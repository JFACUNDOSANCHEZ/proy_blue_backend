const { Router } = require('express');
const pg =require("pg")
const {config} = require("dotenv");
const { postLogin } = require('../controllers/postLogin');
const { postRegister } = require('../controllers/postRegister')
const  {postPosibleUser} = require('../controllers/postPosibleUser')
config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  }
});

const router = Router();



router.post('/', postLogin);
router.post('/register', postRegister);
router.post('/solicitud', postPosibleUser);

router.get('/pong', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      return res.json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;