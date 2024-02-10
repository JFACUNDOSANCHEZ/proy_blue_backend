const {getAllPasseger} = require('./getAllPasseger.js')
const { sequelize, User,  Passeger } = require('../../config/sequelize');


const getPass = async (req, res) => {
   try{
      const token = req.headers['authorization'];
      if (!token) {
          return res.status(401).json({ mensaje: 'Acceso no autorizado. Se requiere un token.' });
      }
      
      const {id} =  req.params;
      const allPasseger = await Passeger.findAll()
     
      const passeger = await allPasseger.find((pass) => pass.id == id)


      console.log(passeger);
     
         
          res.status(200).json(passeger)
      
  
      }catch (error) {
   res.status(503).send(error.message);
   console.log(error.message);
   }
}

 module.exports = {
    getPass
 }