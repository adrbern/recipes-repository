const Recipe = require('../models/recipe');

const typeValid = async ( type = '' ) => {

}

const timesValid = async (time) => {

}

const recipeExist = async(id) => {
    const recipeExist = await Recipe.findById(id);

    if (!recipeExist) {
        throw new Error(`La receta ${id} ya esta registrado`)
    }
}

module.exports = {
    typeValid,
    timesValid,
    recipeExist
};