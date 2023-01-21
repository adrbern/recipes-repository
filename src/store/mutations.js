
// export const myAction = ( state ) => {

// }


// User
export const loginUser = ( state, { name, email, role, google, token, /*refreshToken*/ }) => {
    state.name = name;
    state.email = email;
    state.role = role;
    state.google = google;
    state.token = token;
    //state.refreshToken = refreshToken;
}

export const logout = (state) => {
    state.name = null;
    state.email = null;
    state.role = null;
    state.email = null;
    state.token = null;
    state.refreshToken = null;
}
// Recipes
export const recipesList = (state, { recipes }) => {
    state.recipes = [...recipes] || [];
}

/*
export const recipe = (state, { recipe }) => {
    state.recipe = recipe;
}

export const recipeList = (state, { ingredientslist }) => {
    state.recipe.ingredientslist = ingredientslist;
}

*/

export const recipeInfo = (state, { recipe, ingredientsList }) => {
    state.recipeInfo = { recipe, ingredientsList }
}

export const allIngredients = (state, allIngredientsData) => {
    state.allIngredients = allIngredientsData;
}