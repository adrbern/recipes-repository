const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth');
const { fieldsValidator} = require('../middlewares/index');
const router = Router();

router.post('/login', [
    check('email', 'el correo es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').notEmpty(),
    fieldsValidator
], login); 

module.exports = router;