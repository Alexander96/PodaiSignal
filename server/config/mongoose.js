﻿var mongoose = require('mongoose'),
    user = require('../models/User.js'),
    signal = require('../models/Signal.js');

module.exports = function(config){
    mongoose.connect(config.db);
    //console.log(config.db);

    var db = mongoose.connection;
    db.once( 'open', function ( err ) {
        if ( err ) { console.log( 'Database could not be opened ' + err ); return; }
        console.log( "Database up and running..." );
    });
    db.on( 'error', function ( err ) {
        console.log( 'Database error ' + err );
    });

    user.seedInitialUsers();
    signal.seedInitialSignals();
   
}