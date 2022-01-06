const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');

const login = async(req, res) => {
    const { email, password } = req.body; 

    try {
        // Verificar si el email existe
        const user = await User.findOne({ email })
        
        if(!user) {
            return res.status(400).json({
                msg: 'Usuario /password no son correctos - correo'
            })
        }
        //Si el usuario esta activo
        if(!user.status) {
            return res.status(400).json({
                msg: 'Usuario /password no son correctos - estado: false'
            })
        }

        // Verificar contraseña
        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - estado: false'
            });
        }
        //Generar el JWT
        const token = await generateJWT(user.id);

        res.json({
            msg: 'Login Ok',
            user,
            token
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
}

module.exports = {
    login
};