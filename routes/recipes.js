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
    //ingredientes

    fieldsValidator
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