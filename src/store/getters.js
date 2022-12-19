
// export const myGetter = ( state ) => {
//  return state
// }

/*
export const currentState = ( state ) => {
    return state.status
}
*/

export const isLogged = ( state ) => {
    return Boolean(state.token);
}
export const username = ( state ) => {
    return state.name;
}
