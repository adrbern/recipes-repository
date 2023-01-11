
// export const myGetter = ( state ) => {
//  return state
// }

/*
export const currentState = ( state ) => {
    return state.status
}
*/

//USER
export const isLogged = ( state ) => {
    return Boolean(state.token);
}
export const username = ( state ) => {
    return state.name;
}

//RECIPES

export const recipesByType = ( state) => (type) => {
    if (type) {
        return state.recipes.filter((item) => {
            return item.type === type;
        })
    }

    return state.recipes || [];
}


export const getRecipeById = ( state) => (id) => {
    if (id) {
        return state.recipes.find((item) => {
            return item._id === id;
        })
    }

    return null;
}

export const getRecipe = (state) => {
    return state.recipe;
}