// INSTANCE SERVICE
const Logger = require('../services/logger');
const logger =  new Logger();

// DEPENDENCY
const express = require('express');
const Router = require('./router');

class Server {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.port =  process.env.PORT || 5001;
        this.router = new Router(this.app);
    }

    listen() {
        this.app.listen(this.port, () => logger.log('info', `server listen at port ${this.port}`));
    }
}

module.exports = Server;
