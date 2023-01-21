import authApi from '@/api/authApi';
import userApi from '@/api/userApi';
import recipesApi from '@/api/recipesApi';
import ingredientsListApi from '@/api/ingredientsListApi';
import ingredientsApi from '@/api/ingredientsApi';


// export const myAction = async ({ commit }) => {


// }

// USERS
export const signInUser = async ({ commit }, user ) => {
    const { email, password } = user.value;

    try {
        const {data: {token, user}} = await authApi.post('login', { email, password, returnSecureToken: true })
        commit('loginUser',  {...user, token } )

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error?.response?.data?.error?.message }
    }
    
}

export const registerUser = async({commit}, registerData) => {
    const { username, email, password } = registerData.value;

    try {
       const {data: { user }} = await userApi.post('', { name: username, email, password, role: 'USER_ROLE'});
       commit('loginUser',  {...user }) ;

       return { ok: true };
    } catch (error) {
        return { ok: false, message: error?.response?.data?.error?.message}
    }
}

// RECIPES
export const getRecipes = async({commit}, filter = {}) => {
    try {
        const {data: { recipes }} = await recipesApi.get('', filter);
        commit('recipesList',  { recipes }) ;
    
        return { ok: true, recipes };
    } catch (error) {
        return { ok: false, message: error?.response?.data?.error?.message}
    }
}

export const getRecipesById = async({commit}, id = '') => {
    try {
        const {data: { recipe }} = await recipesApi.get(`${id}`, {});
        //commit('recipe',  { recipe }) ;
    
        console.log(commit)
        return { ok: true, recipe };
    } catch (error) {
        return { ok: false, message: error?.response?.data?.error?.message}
    }
}

// INGREDIENTS List
export const getIngredientsListById = async({commit}, id = '') => {
    try{
        const {data: { ingredientList }} = await ingredientsListApi.get(`${id}`, {});
        //commit('recipeList',  { ingredientList }) ;
    
        console.log(commit)
        return { ok: true, ingredientsList: ingredientList };
    } catch(e) {
        return { ok: false, message: e?.response?.data?.error?.message}
    }
}

// INGREDIENT
export const getAllIngredients = async({commit}, id = '') => {
    try{
        const {data: { ingredients }} = await ingredientsApi.get(`${id}`, {});
        commit('allIngredients', ingredients) ;
    
        return { ok: true, ingredients };
    } catch(e) {
        return { ok: false, message: e?.response?.data?.error?.message}
    }
}









/*
export const createUser = async ({ commit }, user ) => {
    
}
*/

//////

/*
export const createUser = async ({ commit }, user ) => {

    const { name, email, password } = user

    try {
        
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        const { token, refreshToken } = data

        await authApi.post(':update', { displayName: name, token, refreshToken })
        
        delete user.password
        commit('loginUser', { user, token, refreshToken })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }

}*/

/*
export const checkAuthentication = async ({ commit }) => {

    const token      = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refreshToken')

    if( !token ) {
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        
        const { data } = await authApi.post(':lookup', { token })
        // console.log(data)
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }

        commit('loginUser', { user, token, refreshToken })

        return { ok: true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }

}*/