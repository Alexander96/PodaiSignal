﻿var app = angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'angular-flexslider']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);

    var routeUserCheck = {
        adminRole: {
            authenticate: function ( auth ) {
                return auth.isAuthorizedForRole( 'admin' );
            }
        },
        authenticated: {
            authenticate: function(auth){
                return auth.isAuthenticated();
            }
        }
    }

    $routeProvider
        .when('/', {
            templateUrl : '/partials/main/home',
            controller: 'MainController'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpController'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileController',
            resolve: routeUserCheck.authenticated
        })
        .when('/all-signals',{
            templateUrl: '/partials/allSignals/allSignals',
            controller: 'AllSingalsController'
        })
        .when('/signal', {
            templateUrl: '/partials/signal/signal',
            controller: 'SignalController'
        })
        .when('/map', {
            templateUrl: '/partials/map/map',
            controller: 'MapController'
        })
        .when('/info', {
            templateUrl: '/partials/info/info',
            controller: 'InfoController'
        })
        .otherwise({ redirectTo: '/' });

});
app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        if(rejection === 'not-authorized'){
            $location.path('/');
        }
    });
});