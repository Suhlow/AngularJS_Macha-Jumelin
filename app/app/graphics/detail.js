'use strict';
myModule.directive('detail', [function () {
    return {
        templateUrl: '/graphics/detail.html',
        scope:{
            rest: "=restaus"
        }
    };
}]);