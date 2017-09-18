(function() {
    'use strict';

    angular.module('ligazakontestapp')
        .controller('BundlesController', [ '$scope', function($scope, $state) {
            $scope.packages = [
                {id: 0, name: 'min', descr: 'min descr'},
                {id: 1, name: 'med', descr: 'med descr'},
                {id: 2, name: 'full', descr: 'full descr'},
                {id: 3, name: 'large', descr: 'large descr'},
            ];
        }])
        .directive('bundles', function() {
            return {
                restrict: 'E',
                templateUrl: 'components/bundles/bundles.html'
            };
        });
})();