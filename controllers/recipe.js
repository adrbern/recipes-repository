const { response } = require('express');
const Recipe = require('../models/recipe');

const recipesGet = async (req, res = response) => {
    
}

const recipeGet = async (req, res = response) => {
    
}

const recipePost = async(req, res = response) => {
    const { name, img, type, description, persons } = req.body;
    const recipe = new Recipe({
        name,
        img,
        type,
        description,
        persons,
        user: req.user._id ////// REVISAR POR AQUI
    });

    // guardar en BD
    await recipe.save();

    res.json({
        msg: "Post API controlador",
        user
    });
}

const recipePut = async(req, res = response) => {

}

const recipePath = (req, res = response) => {

}

const recipeDelete = async(req, res = response) => {
 
}

module.exports = {
    recipesGet,
    recipeGet,
    recipePost,
    recipePut,
    recipePath,
    recipeDelete
}