const fieldsValidator = require('../middlewares/fields-validator');
const JWTvalidator = require('../middlewares/jwt-validator');
const rolevalidator = require('../middlewares/role-validator');

module.exports = {
    ...fieldsValidator,
    ...JWTvalidator,
    ...rolevalidator
}