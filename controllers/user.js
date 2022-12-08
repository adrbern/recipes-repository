const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const userGet = async (req, res = response) => {
    const { limit = 5, stop = 0 } = req.query;
    const filter = { status: true };

    const [ total, users ] = await Promise.all([
        User.countDocuments(filter),
        User.find(filter)
            .skip(Number(limit))
            .limit(Number(limit))
    ]);
    res.json({
        msg: "Get API controlador",
        total,
        users
    });
}

const userPost = async(req, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // encriptar la contraseña
    const salt = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password, salt);

    // guardar en BD
    await user.save();

    res.json({
        msg: "Post API controlador",
        user
    });
}

const userPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    // TODO validar contra base de datos
//    User.findOne(id);

    if (password) {
        const salt = bcryptjs.genSaltSync();

        resto.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json({
        msg: "Put API controlador",
        user
    });
}

const userPath = (req, res = response) => {
    res.json({
        msg: "Path API controlador"
    });
}

const userDelete = async(req, res = response) => {
    const { id } = req.params;
    const uid = req.uid;

    //  Borrado fisico
    // const user = await User.findByIdAndDelete(id);

    // Borrado logico
    const user = await User.findByIdAndUpdate(id, { status: false });

    const userAuth = req.user;
    res.json({
        msg: "Delete API controlador",
        user,
        userAuth
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPath,
    userDelete
}