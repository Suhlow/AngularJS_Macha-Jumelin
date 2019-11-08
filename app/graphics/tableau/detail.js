'use strict';

myModule.directive('detail', [function () {
    return {
        templateUrl: '/graphics/tableau/detail.html',
        scope:{
            rest: "=restaus"
        }
    };
}]);