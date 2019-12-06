'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.graphics', 'myApp.services',  'myApp.version'
])
.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

}])

.controller('View1Ctrl', ['$scope','restaurantservice', function($scope, restaurantservice) {
  $scope.restaurants = restaurantservice.restaurants;
}]);