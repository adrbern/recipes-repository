const jwt = require('jsonwebtoken');
// TODO definir modelo
const User = require('../models/user');

const JWTvalidator = async (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }

    console.log(token);

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
        
        const user = await User.findById(uid);

        if (!user) {
            return res.status(401).json({
                msg: "Token no valido- usuario no existe en bd"
            })
        }

        // Verificar si el uid tiene estado en true

        if(!user.status) {
            return res.status(401).json({
                msg: "token n valido- usuario con estado a false"
            })
        }

        req.user = user;
        console.log(uid);

        next(); 
    } catch(err) {
        console.log(err);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = {
    JWTvalidator
}