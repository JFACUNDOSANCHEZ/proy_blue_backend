const user = require('../models/user')


const postLogin = async (req, res) => {
   try{

    console.log(User);
      const {id} =  req.params;

      const usuario = await User.findByPk(id);
  
         
          res.status(200).json(usuario)
      
  
      }catch (error) {
   res.status(503).send(error.message);
   console.log(error.message);
   }
}

module.exports ={
    postLogin
}