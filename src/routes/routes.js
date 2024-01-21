const { Router } = require('express');
const pg = require("pg")
const { config } = require("dotenv");
const { postLogin } = require('../controllers/postLogin');
const { postRegister } = require('../controllers/postRegister')
const { getallUser } = require('../controllers/getAllUsers');
const { putUser } = require('../controllers/putUser');
const { getUserId } = require('../controllers/getUserID');
config();



const router = Router();



router.get('/prueba', async (req, res) => {


  return res.status(400).send('Dale guachito');
}


)




router.post('/register', async (req, res) => {
  try {
    await postRegister(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


router.get('/user/:id', async (req, res) => {
  try {
    await getUserId(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/user/:id', async (req, res) => {
  try {
    await putUser(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/login', async (req, res) => {
  try {
    await postLogin(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


router.get('/user', async (req, res) => {
  try {
    await getallUser(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
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