import authApi from '@/api/authApi';
import userApi from '@/api/userApi';
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