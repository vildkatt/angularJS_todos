angular.module('app', ['ngRoute',  'app.main', 'app.component1', 'app.component2', 'app.component3'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    })
    // .filter('unique', function() {
    //   return function(data, propertyName) {
    //       var results = [];
    //       var keys = {};
    //       for (var i=0; i<data.length; i++) {
    //         var item = data[i];
    //         var val = item[propertyName];
    //         if (angular.isUndefined(keys[val])) {
    //           keys[val] = true;
    //           results.push(item);
    //         }
    //       }
    //       return results;
    //   };
    // });
