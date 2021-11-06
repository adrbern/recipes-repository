const fieldsValidator = require('../middlewares/fields-validator');
const JWTvalidator = require('../middlewares/jwt-validator');

module.exports = {
    ...fieldsValidator,
    ...JWTvalidator,
}