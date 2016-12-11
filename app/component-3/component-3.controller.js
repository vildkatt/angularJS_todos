angular.module('app.component3')
.controller('component3Controller', function($scope, $http, $modal, response){
   'use strict';

   $scope.tasks = response.data;
   $scope.taskName = '';
   $scope.taskCategory = '';
   $scope.taskDate = '';
   $scope.taskPriority = '';

   $scope.selectedTask = null;

   $scope.setSelected = function (selectedTask) {
     $scope.selectedTask = selectedTask;
   };

   $scope.openModal = function () {
   var modal = $modal.open({
     templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
     controller: 'MyModalController'
   });

   modal.result.then(function(addedTask) {
            $scope.tasks.push(addedTask);
        });

   };

   $scope.openEditModal = function () {
   var modal = $modal.open({
   templateUrl: '/component-1/edit-dialog/edit-dialog.tpl.html',
   controller: 'EditModalController',
   resolve: {
              selectedTask: function() {
                  return $scope.selectedTask;
              }
          }
   });
   modal.result.then(function(selectedTask) {
         angular.copy(selectedTask, $scope.selectedTask);
      });

   };

 }).controller('MyModalController', ['$scope', '$modalInstance', '$http', function($scope, $modalInstance, $http, selectedTask){
      'use strict';
      $scope.addedTask =  {
      "title": '',
      "category": '',
      "date": '',
      "priority": '',
      "description": ''
   };
      $scope.ok = function() {
        $modalInstance.close($scope.addedTask);
      };

      $scope.cancel = function() {
        $modalInstance.dismiss();
    };

   }]).controller('EditModalController', ['$scope', '$modalInstance', '$http', 'selectedTask', function($scope, $modalInstance, $http, selectedTask){
      'use strict';
      $scope.selectedTask = {
        "title" : selectedTask.title,
        "category" : selectedTask.category,
        "date" : selectedTask.date,
        "priority" : selectedTask.priority,
        "description" : selectedTask.description
      };
      $scope.ok = function() {
        $modalInstance.close($scope.selectedTask);
      };

      $scope.cancel = function() {
        $modalInstance.dismiss();
    };

   }]);
