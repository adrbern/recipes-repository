const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async(req, res) => {
    const { correo, password } = req.body; 

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

const googleSignIn = async(req, res) => {
    const { id_token } = req.body;

    try {
        const { name, img, correo } = await googleVerify(id_token);

        let user = await User.findOne({correo});

        if (!user) {
            const data = {
                name,
                email,
                password: ':P',
                role: 'USER_ROLE',
                img,
                google: true
            };

            user = new User(data);
            await user.save();
        }

        if(!user.status) {
            return res.status(401).json({
                msg: "Hable con el adm usuario bloqueado"
            });
        }

        // Generar JWT
        const token = await generarJWT(user.id);

        console.log(user);
        res.json({
            msg: "todo bien",
            user
        });
    } catch(e) {
        console.log(e)
        return res.status(400).json({
            ok: false,
            msg: "El token no se pudo verificar"
        })
    }
}

module.exports = {
    login,
    googleSignIn
};