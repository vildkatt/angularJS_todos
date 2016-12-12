angular.module('app.component3', ['ngRoute','app.component3.templates',  'ui.bootstrap'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/component-3/dialog-c', {
            templateUrl: 'component-3/dialog-c/dialog-c.html',
            controller: 'component3Controller',
            resolve: {
                response: function($http){
                    return $http.get('/component-1/tasks.json');
                }
            }
        });

        // .when('/component-1/modal-dialog', {
//     templateUrl: 'component-1/modal-dialog/modal-dialog.html',
//     controller: 'MyFirstController',
//     resolve: {
//         ok: function($http) {
//             return $http.post("http://localhost:8080/webstore/rest/books", data).success(function(data, status) {
//                 var data = {
//                     "title": "Java",
//                     "category": "IT"
//                 };
//                 console.log("passed");
//             });
//         }
//     }
// });

    });
