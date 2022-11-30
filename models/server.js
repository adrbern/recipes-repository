const express = require('express');
const history = require('connect-history-api-fallback');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = '8081';
        this.authPath = '/api/auth';
        this.usersPath = '/api/users';
        this.recipesPath = '/api/recipes';

        //Conexion BD
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usersPath, require('../routes/users'));
        this.app.use(this.recipesPath, require('../routes/recipes'));
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Middleware para Vue.js router modo history
        this.app.use(history());
        
        // Directorio estatico
        //this.app.use(express.static('public'));
        //this.app.use(express.static('dist'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto' + this.port);
        });
    }
}

module.exports = Server;