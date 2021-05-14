
class MainController {
    ping(request, response) {
        return response.status(200).send('pong');
    }
}

module.exports = new MainController();