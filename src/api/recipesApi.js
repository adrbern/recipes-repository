import axios from 'axios'
require('dotenv').config();

const recipeApi = axios.create({
    baseURL: `${process.env.ENV || 'http://localhost:8080'}/api/recipes/`,
    params: {
        //key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default recipeApi;