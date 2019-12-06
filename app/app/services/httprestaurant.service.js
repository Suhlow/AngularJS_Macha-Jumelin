'use strict';
angular.module("myApp.services").factory('httprestaurantservice',['$resource', function($resource){
    return $resource('data/restaurants/:id.json');
}]);