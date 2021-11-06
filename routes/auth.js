const { Router } = require('express');
const { check } = require('express-validator');

const { login, googleSignIn } = require('../controllers/auth');
const { fieldsValidator} = require('../middlewares/index');
const router = Router();

router.post('/login', [
    check('email', 'el correo es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').notEmpty(),
    fieldsValidator
], login); 

router.post('/google', [
    check('id_token', 'id_token de google es necesario').not().isEmpty(),
    fieldsValidator
], googleSignIn); 

module.exports = router;