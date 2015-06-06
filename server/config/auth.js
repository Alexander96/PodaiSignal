var passport = require('passport');
module.exports = {
    login: function ( req, res, next ) {
        var auth = passport.authenticate( 'local', function ( err, user ) {
            if ( err ) {
                console.log( 'Not authen: ' + err );
                return next( err );
            }
            if ( !user ) {
                console.log( 'user: ' + user );
                res.send( { success: false });
            }
            req.logIn( user, function ( err ) {
                if ( err ) {
                    return next( err );
                }
                res.send( { success: true, user: user });
            });
        });
        auth( req, res, next );
    },
    logout: function(req, res, next){
        req.logout();
        res.end();
    },
    isAuthenticated: function(req, res, next){  //function which checks if an user is authenticated
        var user_id_access_token = req.query['user_id_access_token'];
        if(user_id_access_token != "" && user_id_access_token){
            User.findOne({_id: user_id_access_token}).select("_id").exec(function(err, userId){
                if(err || !userId){
                    res.status(403);
                    res.end();
                }
                next();
            })
        }
        else if(!req.isAuthenticated()){
            res.status(403);
            res.end();
        }
        else{
            next();
        }
    },
    isInRole: function(role){
        return function(req, res, next){
            if(req.isAuthenticated() && req.user.roles.indexOf(role) > -1){
                next();
            }
            else{
                res.status(403);
                res.end();
            }
        }
    }
}