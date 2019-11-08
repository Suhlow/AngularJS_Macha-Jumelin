var  myModule = angular.module('myApp');
myModule.directive('tableau', [function () {
    return{
        scope:{
            restaurants: '=lesrestaurants'
        },
        templateUrl:'/graphics/tableau/tableau.html',
        link: function (scope, element, attrs) {
            //Booléen pour désactiver/activer la visibilité des informations (proprio et mail)
            scope.IsVisible = false;

            scope.selectRestaurants = function (r) {
                scope.restaurant = r;
            };

            //Montrer
            scope.showThis = function(){
                this.IsVisible = true;
            };

            //Cacher
            scope.hideThis = function(){
                this.IsVisible = false;
            };
        },
    };
}]);