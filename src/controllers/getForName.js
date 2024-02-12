const {getAllPasseger} = require('./getAllPasseger.js');
const { sequelize, User,  Passeger } = require('../../config/sequelize');

const getForName = async (req, res)=> {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso no autorizado. Se requiere un token.' });
    }
    
    const  name  = req.query.name;
 try {
    const passegers = await Passeger.findAll() 

        if (name) {
            const passengerFind = passegers.filter((pass) => {
                const dniMatch = pass.dni.toLowerCase().includes(name.toLowerCase());
                const nameMatch = pass.name.toLowerCase().includes(name.toLowerCase());
                return dniMatch || nameMatch;
            });
    

          res.status(200).json(passengerFind);
        } 
      
 }
 catch (error) {
     res.status(500).send(error.message);
    }
}

module.exports ={ 
    getForName
}