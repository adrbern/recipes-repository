const { response } = require('express');
const Recipe = require('../models/recipe');

const recipesGet = async (req, res = response) => {
    const { limit = 5, stop = 0 } = req.query;
    const filter = { status: true };

    const [ total, recipes ] = await Promise.all([
        Recipe.countDocuments(filter),
        Recipe.find(filter)
            .skip(Number(limit))
            .limit(Number(limit))
    ]);
    res.json({
        msg: "Get API controlador",
        total,
        recipes
    });
}

const recipeGet = async (req, res = response) => {
    const id = req.params.id;

    const recipe = await Recipe.findById(id).populate('user', 'name');

    res.json({
        recipe
    });
}

const recipePost = async(req, res = response) => {
    const { name, img, type, description, persons } = req.body;
    const recipe = new Recipe({
        name,
        img,
        type,
        description,
        persons,
        user: req.user._id
    });

    // guardar en BD
    await recipe.save();

    res.json({
        msg: "Post API controlador"
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