const { sequelize, User,  Passeger } = require('../../config/sequelize');

const getAllPasseger = async (req, res) => {
try {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso no autorizado. Se requiere un token.' });
    }
    else{
        console.log('0aca esta eltoken' + token);

        const allPasseger = await Passeger.findAll()
        console.log(Passeger);    
        res.status(200).json(allPasseger)
        
    }
} catch (error) {
    res.status(404).json({ message: error.message })
}




}

module.exports={


    getAllPasseger
}