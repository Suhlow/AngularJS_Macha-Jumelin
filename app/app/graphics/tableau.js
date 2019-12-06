var  myModule = angular.module("myApp.graphics");
myModule.directive('tableau', ['restaurantservice',function(restaurantservice) {
    return{
        scope:{
            restaurants: '=lesrestaurants'
        },
        templateUrl:'/graphics/tableau.html',
        link: function (scope, element, attrs) {
            scope.IsVisible = false;
            scope.modifCom = true;

            scope.selectRestaurants = function (r) {
                scope.restaurant = r;
            };

            //visibilité
            scope.modif=function(){
                scope.modifCom=false;
            };
            scope.validCom=function(){
                scope.modifCom=true;
            };
            scope.showThis = function(){
                this.IsVisible = true;
            };
            scope.hideThis = function(){
                this.IsVisible = false;
            };
        },
    };
}]);