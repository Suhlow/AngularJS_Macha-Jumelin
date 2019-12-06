myModule.directive('formcreate', ['restaurantservice', function (restaurantservice) {
    return{
        templateUrl: '/graphics/formcreate.html',
        scope:{
            restaurant: "=",
        },
        link: function (scope, element, attrs) {
            scope.$watch(()=>scope.restaurant, function(){
                scope.monrestaurant=angular.copy(scope.restaurant);
                scope.formCreation.$setPristine();
            });
            scope.creer=function(){
                restaurantservice.save(scope.monrestaurant);
                scope.formCreation.$setPristine();
            };
            scope.annuler=function(){
                scope.monrestaurant={};
                scope.formCreation.$setPristine();
            };
        }
    }
}]);
