const { sequelize, User } = require('../../config/sequelize');

const getUserName = async (req, res) => {
  try {
    const name = req.query.name;

    // Validar si 'name' está presente
    if (!name) {
      return res.status(400).json({ message: "El parámetro 'name' es requerido" });
    }
console.log(User);
if (name) {
    
    const allUsers = await User.findAll();
    const filteredUsers = allUsers.filter((user) => {
        const nombreMatch = user.nombreCompleto.toLowerCase().includes(name.toLowerCase());
        const correoMatch = user.correoElectronico.toLowerCase().includes(name.toLowerCase());
        return nombreMatch || correoMatch;
      });
      res.status(200).json(filteredUsers);
      console.log('aca estan los userss'+allUsers);
}


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { getUserName };