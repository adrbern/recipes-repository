const fieldsValidator = require('../middlewares/fields-validator');
const JWTvalidator = require('../middlewares/jwt-validator');
const rolesValidator = require('../middlewares/roles-validator');

module.exports = {
    ...fieldsValidator,
    ...JWTvalidator,
    ...rolesValidator
}