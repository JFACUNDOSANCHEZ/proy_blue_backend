const { sequelize, User} = require('../../config/sequelize');

const getallUser = async (req, res) => {
try {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso no autorizado. Se requiere un token.' });
    }
    
    const allUser = await User.findAll()
 
res.status(200).json(allUser)
} catch (error) {
    res.status(404).json({ message: error.message })
}




}

module.exports={


    getallUser
}