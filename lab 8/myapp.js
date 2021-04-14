var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/red', {
        templateUrl: 'red.html'
    })
    .when('/blue', {
        templateUrl: 'blue.html'
    })
});
