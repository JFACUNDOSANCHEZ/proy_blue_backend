const { sequelize, User, } = require('../../config/sequelize');



const putUser = async (req, res) => {
  const { id } = req.params;
  const { activo,  nombreCompleto, nivel, pendiente } = req.body;
console.log(id);

  try {
    const usuario = await User.findByPk(id);
console.log('¡aca esta el userrrrr'+ usuario);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    if (activo) {
      usuario.activo = activo;
    }
    console.log(usuario.activo+  " aca esta el activo por config   "+activo);
    if (nombreCompleto) {
      usuario.nombreCompleto = nombreCompleto;
    }

    if (nivel) {
      usuario.nivel = nivel;
    }
    if (pendiente !== undefined) {
      console.log('El campo pendiente está presente en la solicitud');
   
    }
    if (pendiente) {
      console.log('aca esta en pendiente' +  pendiente);
      usuario.pendiente = pendiente;
    }

    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(501).json({ mensaje: 'Hubo un error al actualizar el estado del usuario' });
  }
}


module.exports = {
  putUser
}

