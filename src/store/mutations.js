
// export const myAction = ( state ) => {

// }


export const loginUser = ( state, { name, email, role, google, idToken, refreshToken }) => {
    state.name = name;
    state.email = email;
    state.role = role;
    state.google = google;
    state.token = idToken;
    state.refreshToken = refreshToken;
}


export const logout = (state) => {
    
    state.name = null;
    state.email = null;
    state.role = null;
    state.email = null;
    state.token = null;
    state.refreshToken = null;

    /*localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')*/
}
