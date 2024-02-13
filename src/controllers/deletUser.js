const { sequelize, User,  Passeger } = require('../../config/sequelize');

const deletUser = async (req, res) => {
  try {
    
    const { id } = req.params;
    const Usuario = await User.findByPk(id);
     
  
      if (!Usuario) {
        return res.status(404).json({ mensaje: 'Pasajero no encontrado' });
      }
      await Usuario.destroy();
  
      res.status(200).json({ mensaje:' pasajero eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar el pasajero' });
    }
  };

  module.exports = {
    deletUser
  };