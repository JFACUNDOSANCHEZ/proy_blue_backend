const { sequelize, User} = require('../../config/sequelize');
const getallUser = async (req, res) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ mensaje: 'Acceso no autorizado. Se requiere un token.' });
        } else {
            const allUser = await User.findAll();
            res.status(200).json(allUser);
        }
    } catch (error) {
        // Cambia el estado de la respuesta a 500 Internal Server Error
        res.status(500).json({ message: 'Error interno del servidor al obtener usuarios.' });
    }
}

module.exports={


    getallUser
}