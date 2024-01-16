const { Router } = require('express');


const router = Router();



router.get('/', (req, res) => {
    res.send('Hola mundo'); 
});

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