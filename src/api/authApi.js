import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:8081/api/auth/',
    params: {
        //key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi