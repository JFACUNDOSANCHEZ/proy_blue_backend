const { sequelize, User } = require('../../config/sequelize');
const jwt = require('jsonwebtoken');

const getUserId = async (req, res) => {
   try{
      const token = req.headers['authorization'];
      if (!token) {
          return res.status(401).json({ mensaje: 'Acceso no autorizado. Se requiere un token.' });
      }
      
  
      const {id} =  req.params;

      const usuario = await User.findByPk(id);
  
         
          res.status(200).json(usuario)
      
  
      }catch (error) {
   res.status(503).send(error.message);
   console.log(error.message);
   }
}

 module.exports = {
    getUserId
 }