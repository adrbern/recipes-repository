const { Router } = require('express');
const { userGet, userPut, userPost, userDelete, userPath } = require('../controllers/user');
const { check } = require('express-validator');
const { roleValid, validEmail, existById } = require('../helpers/user-validators');
const { fieldsValidator, JWTvalidator, isAdminRole, hasRole} = require('../middlewares/index');

const router = Router();

router.get('/', userGet);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existById),
    check('role').custom(roleValid),
    fieldsValidator
], userPut);

router.post('/', [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el parssword es obligatorio  de mas de 6 letras').isLength({ min: 6 }),
    check('email', 'el correo no es valido').isEmail(),
    check('email').custom(validEmail),
    fieldsValidator
], userPost);

router.delete('/:id', [
    JWTvalidator,
    // isAdminRole,
    hasRole('VENTAS_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existById),
    fieldsValidator
], userDelete);

router.patch('/', userPath);     

module.exports = router;