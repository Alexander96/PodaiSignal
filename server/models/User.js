var mongoose = require('mongoose');
var encryption = require('../utilities/encryption.js'); 
var userSchema = mongoose.Schema({
        username: {type: String, require: '{PATH} is required', unique: true},
        firstName: {type: String, require: '{PATH} is required'},
        middleName: {type: String, require: '{PATH} is required'},
        lastName: {type: String, require: '{PATH} is required'},
        phone: String,
        email: String,
        town: String,
        salt: String,
        hashPass: String,
        roles: [String],
        votes: [String]
    });
    userSchema.method({
        authenticate: function(password){
            if(encryption.generateHashedPassword(this.salt, password) === this.hashPass){
                return true;
            }
            return false;
        }
    })
    var User = mongoose.model('User', userSchema);
module.exports.seedInitialUsers = function(){
        User.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cant find users ' + err)
            return;
        }
        //console.log(collection);
        if ( collection.length == 0 ) {
            var salt,
                hasedPwd;
            salt = encryption.generateSalt();
            hasedPwd = encryption.generateHashedPassword( salt, 'golqmsiej' );
            User.create( { username: 'alex', firstName: 'Alexander', middleName:"Yordanov", email: "alexander@gmail.com", phone: "094265444", lastName: 'Yordanov', salt: salt, hashPass: hasedPwd, roles: ['admin'] });
            salt = encryption.generateSalt();
            hasedPwd = encryption.generateHashedPassword( salt, 'pesho' );
            User.create( { username: 'pesho', firstName: 'Pesho', middleName:"Peshev", email: "pesho@gmail.com", phone: "5942805420", lastName: 'Peshev', salt: salt, hashPass: hasedPwd, roles: ['agency'] });
            salt = encryption.generateSalt();
            hasedPwd = encryption.generateHashedPassword( salt, 'gosho' );
            User.create( { username: 'gosho', firstName: 'Gosho', middleName:"Goshev", email: "gosho@gmail.com", phone: "5439543289", lastName: 'Goshev', salt: salt, hashPass: hasedPwd, roles: ['standart'] });
            console.log( 'Users added to database....' );
    }
    });
}