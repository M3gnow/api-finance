require('dotenv').config();

const Server = require('./src/server/server');
const Logger = require('./src/services/logger');
const logger =  new Logger();

(function () {
    try {
        const server =  new Server();

        server.listen();

    } catch (e) {
        logger.log('error', e);
        process.exit(1);
    }
})();