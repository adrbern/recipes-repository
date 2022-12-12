import axios from 'axios'

const recipeApi = axios.create({
    baseURL: 'http://localhost:8081/api/recipe/',
    params: {
        //key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default recipeApi;