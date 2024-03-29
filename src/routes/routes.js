const { Router } = require('express');
const pg = require("pg")
const { config } = require("dotenv");
const { postLogin } = require('../controllers/postLogin');
const { postRegister } = require('../controllers/postRegister')
const { getallUser } = require('../controllers/getAllUsers');
const { putUser } = require('../controllers/putUser');
const { getUserId } = require('../controllers/getUserID');
const { postPasseger } = require('../controllers/postPasseger');
const { getForName } = require('../controllers/getForName');
const { getAllPasseger } = require('../controllers/getAllPasseger');
const { getPass } = require('../controllers/getPassID');
const { updatePasseger } = require('../controllers/putasseger');
const { deletPasseger } = require('../controllers/deletPasseger');
const { getUserName } = require('../controllers/getUserName');
const { postCodigo} = require('../controllers/postCodigo');
const { deletUser } = require('../controllers/deletUser');
config();



const router = Router();






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

router.get('/get', async (req, res) => {
  try {
       await getAllPasseger(req, res)
      
  } catch (error) {
      res.status(200).json({ message: error.message })
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



router.post('/post', async (req, res) => {
  try {
    await postPasseger(req, res);
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

router.get('/get/:id', async (req, res) => {
  try {
    await getPass(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/confirmar', async (req, res) => {
  try {
    await postCodigo(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/get/:id', async (req, res) => {
  try {
    await updatePasseger(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


router.delete('/get/:id', async (req, res) => {
  try {
    await deletPasseger(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
router.delete('/user/:id', async (req, res) => {
  try {
    await deletUser(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


router.get('/getDNI', async (req, res) => {
  try {
    await getForName(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(503).json({ error: 'Error interno del servidor' });
  }
});
router.get('/getUser', async (req, res) => {
  try {
    await getUserName(req, res);
  } catch (error) {
    console.error('Error en la ruta /register:', error);
    res.status(503).json({ error: 'Error interno del servidor' });
  }
});



module.exports = router;