'use strict';
angular.module('myApp', ['ngRoute', 'myApp.view1', 'myApp.view3'])
.controller('mainctrl', ['$scope', function($scope){
  }])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
      $routeProvider.when('/view3', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl'
      });
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);