const Role = require('../models/role');
const User = require('../models/user');

const roleValid = async ( role = '' ) => {
    const roleExist = await Role.findOne({ role });

    if (!roleExist) {
        throw new Error(`El rol ${role} no esta registado en la BD`);
    }
}

const validEmail = async (email) => {
    // verificar si el email existe
    const existeEmail = await User.findOne({ email });

    if (existeEmail) {
       throw new Error('el email ya esta registrado');
    }
}

const existById = async(id) => {
    const userExist = await User.findById(id);

    if (!userExist) {
        throw new Error(`El correo ${id} ya esta registrado`)
    }
}

module.exports = {
    roleValid,
    validEmail,
    existById
};