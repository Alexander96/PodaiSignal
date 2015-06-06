var usersController = require('../controllers/UsersController.js'),
	signalController = require('../controllers/SignalController.js')

module.exports = {
    users: usersController,
    signal: signalController
}