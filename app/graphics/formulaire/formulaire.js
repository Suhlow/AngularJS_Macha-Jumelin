myModule.directive('monform', [function () {
    return{
        templateUrl: '/graphics/formulaire/formulaire.html',
        scope:{
            restaurant: "=",
        },
        link: function (scope, element, attrs) {
        scope.$watch(()=>scope.restaurant, function(){
            scope.monrestaurant=angular.copy(scope.restaurant);
            console.log(scope.restaurant);
            });

        scope.valider=function(){
            angular.copy(scope.monrestaurant, scope.restaurant);
        };

        scope.annuler=function(){
            scope.monrestaurant=angular.copy(scope.restaurant);
        };
      }
    }
}]);
