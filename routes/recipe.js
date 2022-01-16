const { Router } = require('express');
const { recipesGet, recipeGet, recipePut, recipePost, recipeDelete, recipePath } = require('../controllers/recipe');
const { check } = require('express-validator');
const { typeValid, timesValid, recipeExist } = require('../helpers/recipe-validators');
const { fieldsValidator, JWTvalidator, hasRole} = require('../middlewares/index');

const router = Router();

router.get('/', recipesGet);

router.get('/:id', [
    JWTvalidator,
    check('id').custom(recipeExist),
    check('id', 'No es un ID de mongo valido').isMongoId(),
    fieldsValidator
], recipeGet);
/*
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existById),
    check('role').custom(roleValid),
    fieldsValidator
], recipePut);*/

router.post('/', [
    JWTvalidator,
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('img', 'La imagen es obligatoria').not().isEmpty(),
    check('type', 'No es un tipo valido').isIn(['Vegetal', 'Vegetal', 'Fish']),
    check('description', 'la descripcion es obligatoria').not().isEmpty(),
    //Pensar steps
    //check('times', 'No es valido el tiempo de la receta').isNumeric(), // Mapear antes de la BBDD para el enumerado
    check('persons', 'No son validos el numero de personas').isNumeric(),
    //ingredientes

    /*
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el parssword es obligatorio  de mas de 6 letras').isLength({ min: 6 }),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'recipe_ROLE']),
    check('email', 'el correo no es valido').isEmail(),
    check('email').custom(validEmail),
    check('role').custom(roleValid),
    fieldsValidator*/
], recipePost);
/*
router.delete('/:id', [
    JWTvalidator,
    // isAdminRole,
    hasRole('VENTAS_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existById),
    fieldsValidator
], recipeDelete);

router.patch('/', recipePath);     */

module.exports = router;