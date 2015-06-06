var controllers = require('../controllers');
    auth = require('./auth.js');

var User = require('mongoose').model('User');
module.exports = function (app) {
    app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
       next();
    });
    app.get('/api/users', auth.isInRole('admin'),controllers.users.getAllUsers );
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users',auth.isAuthenticated, controllers.users.updateUser);
    app.get('/img/:img', function(req, res){
        res.send('../../public/img/' + req.params.img);
    })
    app.get('/partials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName, {
               beautify: true,
        });
    });
    app.post('/login', auth.login);
    app.post('/logout', auth.logout);
    app.get('/api/*', function(req,res){
        res.status(404);
        res.end();
    });
    app.get('*', function (req, res) {
        res.render('index', {currentUser: req.user});
    });
};