(function() {
    'use strict';

    angular.module('ligazakontestapp')
        .controller('NavController', [ '$scope', function($scope, $state) {
            $scope.items = [
                { value: 'home', state: 'home' },
                { value: 'contact', state: 'contact' },
                { value: 'about', state: 'about'}
            ];
        }])
        .directive('navMain', function() {
            return {
                restrict: 'E',
                templateUrl: 'common/nav/navMain.html'
            };
        });
})();
