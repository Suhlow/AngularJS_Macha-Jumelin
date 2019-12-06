'use strict';
angular.module("myApp.services").factory('restaurantservice',['httprestaurantservice', function(httprestaurantservice){
    return {
        restaurants : httprestaurantservice.query(),
        delete: function (restaurant){
            this.restaurants.splice(this.restaurants.indexOf(restaurant), 1);
            httprestaurantservice.delete({id:restaurant.id});
        },

        save: function(restaurant){
            if(restaurant && !restaurant.id || restaurant.id === 0){
                restaurant.id = Math.max(this.restaurants.length, ...this.restaurants.map(r => r.id))+1;
                this.restaurants.push(restaurant);
            }else{
                var r = this.restaurants.find((r) => r.id === restaurant.id);
                angular.copy(restaurant, r);
                httprestaurantservice.save(restaurant);
            }}
};
}]);