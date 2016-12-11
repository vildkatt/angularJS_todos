angular.module('app.component1')
.controller('MyFirstController', function($scope, $http, $modal, response){
   'use strict';
   $scope.selectedBook = null;

   $scope.setSelected = function (selectedBook) {
     $scope.selectedBook = selectedBook;
   };

   $scope.books = response.data;

   $scope.openModal = function () {
   var modal = $modal.open({
     templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
     controller: 'MyModalController'
     /*resolve: {
                newBook: function() {
                    return;
                }
            }*/
   });
   modal.result.then(function(addedBook) {
            $scope.books.push(addedBook);
        });

 };

 $scope.openEditModal = function () {
 var modal = $modal.open({
   templateUrl: '/component-1/edit-dialog/edit-dialog.tpl.html',
   controller: 'EditModalController',
   resolve: {
              selectedBook: function() {
                  return $scope.selectedBook;
              }
          }
 });
 modal.result.then(function(selectedBook) {
         angular.copy(selectedBook, $scope.selectedBook);
      });

};

}).controller('MyModalController', ['$scope', '$modalInstance', '$http', function($scope, $modalInstance, $http){ //tu w argumentach bylo jeszcze selectedBook
      'use strict';
      $scope.addedBook =  {
      "genre": '',
      "year": '',
      "title": '',
      "author": ''
  };
      $scope.ok = function() {
        $modalInstance.close($scope.addedBook);
      };
   // obj is json

}]).controller('EditModalController', ['$scope', '$modalInstance', '$http', 'selectedBook', function($scope, $modalInstance, $http, selectedBook){
      'use strict';
      $scope.selectedBook = {
        "genre" : selectedBook.genre,
        "year" : selectedBook.year,
        "title" : selectedBook.title,
        "author" : selectedBook.author
      };
      $scope.ok = function() {
        $modalInstance.close($scope.selectedBook);
      };
}]);
