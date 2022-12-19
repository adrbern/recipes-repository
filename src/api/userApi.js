import axios from 'axios'

const userApi = axios.create({
    baseURL: 'http://localhost:8080/api/user/',
    params: {
        //key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default userApi