const { Router } = require('express');
const pg = require("pg")
const { config } = require("dotenv");
const { postLogin } = require('../controllers/postLogin');
const { postConfirmarCorreo } = require('../controllers/postConfirmarCorreo');
const { postRegister } = require('../controllers/postRegister')
const { postPosibleUser } = require('../controllers/postPosibleUser');
const { getallUser } = require('../controllers/getAllUsers');
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
    router.post('/solicitud', async (req, res) => {
      try {
          await postPosibleUser(req, res);
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
'/confirmar-correo'
router.post('/confirmar-correo', async (req, res) => {
  try {
      await postConfirmarCorreo (req, res);
  } catch (error) {
      console.error('Error en la ruta /register:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/user', async (req, res) => {
  try {
      await getallUser (req, res);
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