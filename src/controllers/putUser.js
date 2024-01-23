const { sequelize, User, Posible, PosibleUsers } = require('../../config/sequelize');



const putUser = async (req, res) => {
  const { id } = req.params;
  const { activo, nombreUsuario, nombreCompleto, nivel } = req.body;
console.log(id);

  try {
    const usuario = await User.findByPk(id);

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

    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(501).json({ mensaje: 'Hubo un error al actualizar el estado del usuario' });
  }
}


module.exports = {
  putUser
}

