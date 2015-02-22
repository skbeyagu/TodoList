angular.module('starter.controllers', [])
  .controller('ListCtrl', function($scope, TodoItems){
    TodoItems.all().then(function(items){
      $scope.todoItemList = items;
    })
  });