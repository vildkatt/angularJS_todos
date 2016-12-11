angular.module('app.component1', ['ngRoute','app.component1.templates'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/component-1/dialog-a', {
            templateUrl: 'component-1/dialog-a/dialog-a.html',
            controller: 'MyFirstController',
            resolve: {
                response: function($http){
                    return $http.get('/component-1/books.json');
                }
            }
        });
    }]);
