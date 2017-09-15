(function() {
    'use strict';

    // function navController($scope, $element, $attrs) {
    //     var ctrl = this;
    //
    //     ctrl.items = [
    //         { value: 'home', state: '' },
    //         { value: 'about', state: '' }
    //     ];
    // }
    //
    // angular.module('ligazakontestapp').component('navComp', {
    //     templateUrl: 'common/nav/navMain.html',
    //     controller: navController
    // });

    angular.module('ligazakontestapp')
        .controller('NavController', [ '$scope', function($scope, $state) {
            $scope.items = [
                { value: 'home', state: 'homePage' },
                { value: 'contact', state: 'contactPage' }
            ];
        }])
        .directive('navMain', function() {
            return {
                restrict: 'E',
                templateUrl: 'common/nav/navMain.html'
            };
        });

})();
