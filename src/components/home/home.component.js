(function() {
    'use strict';

// function homeController($scope, $element, $attrs) {
//     var ctrl = this;
//
//     ctrl.items2 = [
//         { value: 'home', name: 'home'},
//         { value: 'about', name: 'contact'}
//     ];
// }
//
// angular.module('ligazakontestapp').component('homePageComp', {
//     templateUrl: 'components/home/home.html',
//     controller: homeController
// });

    angular.module('ligazakontestapp')
        .controller('HomeController', [ '$scope', function($scope) {
            $scope.values = [
                { value: 'aaa' },
                { value: 'bbbb' }
            ];
        }])
        .directive('home', function() {
            return {
                restrict: 'E',
                templateUrl: 'components/home/home.html'
            };
        });

})();
