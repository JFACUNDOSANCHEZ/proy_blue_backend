const { sequelize, User,  Passeger } = require('../../config/sequelize');

const getAllPasseger = async (req, res) => {
try {
    const allPasseger = await Passeger.findAll()
console.log(Passeger);    
return allPasseger

} catch (error) {
    res.status(404).json({ message: error.message })
}




}

module.exports={


    getAllPasseger
}