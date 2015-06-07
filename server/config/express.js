﻿var express = require( 'express' ),             //takes the module express from nodejs
    bodyParser = require( 'body-parser' ),      //takes the module body-parser from nodejs, which parse data send from the client
    cookieParser = require( 'cookie-parser' ),  //takes the module cookie-parser from nodejs
    session = require( 'express-session' ),     //takes the module express-session from nodejs which creates a session on the client
    passport = require('passport'),             //takes the module passport from nodejs
    favicon = require('serve-favicon');

module.exports = function ( app, config) { 
    app.set( 'view engine', 'jade' );                       //sets the view engine to be jade. Jade is engine for html
    app.set( 'views', config.rootPath + '/server/views' );  //sets where to search for the views of the application
    app.use( cookieParser('grannysbushes') );               //sets the cookie parser and password for it
    app.sessionStore = new session.MemoryStore();           //creates a session store
    app.use(bodyParser.json({limit: '50mb'}));              //sets a limit for a data sent from the client
    app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
    app.use( session(                                       //creates the session
        {
            store: app.sessionStore,
            secret: 'grannysbushes',
            resave: true,
            saveUninitialized: true,
            key: 'express.sid'
        }
        ) );
    app.use('/fonts/', express.static(__dirname+'/public/fonts/'));
    app.use(passport.initialize());                         //intialize the constructor for passport
    app.use(passport.session());                            //and the session for poassport
    app.use( express.static( config.rootPath + '/public' ) );   //sets where to search for views
    app.use( function( req, res, next ) {                   //allows the access from all origins

        res.header('Access-Control-Allow-Origin', null);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    } );
    //app.use(favicon(config.rootPath + '/public/img/favicon.ico'));
}