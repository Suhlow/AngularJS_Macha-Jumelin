'use strict';

angular.module('myApp.view3', ['ngRoute', 'myApp.graphics', 'myApp.services',  'myApp.version'])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope','restaurantservice', function($scope, restaurantservice) {
        $scope.restaurants = restaurantservice.restaurants;
    }]);