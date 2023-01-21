import axios from 'axios'
require('dotenv').config();

const ingredientsApi = axios.create({
    baseURL: `${process.env.ENV || 'http://localhost:8080'}/api/ingredients/`,
    params: {
        //key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default ingredientsApi;