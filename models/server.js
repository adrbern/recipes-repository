const express = require('express');
const history = require('connect-history-api-fallback');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.usersPath = '/api/users';

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
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Middleware para Vue.js router modo history
        this.app.use(history());
        
        // Directorio estatico
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, '127.0.0.1', () => {
            console.log('Servidor corriendo en el puerto' + this.port);
        });
    }
}

module.exports = Server;