const mainController = require('./../controllers/main-controller');

const accountController = require('./../controllers/account-controller');

class Router {
    constructor(app) {
        // app.[METHOD]([ROUTER], [CONTROLLER])

        app.get("/ping", mainController.ping);

        app.post("/account", accountController.create.bind(accountController))
    }
}

module.exports = Router