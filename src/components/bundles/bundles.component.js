(function() {
    'use strict';

    angular.module('ligazakontestapp')
        .controller('BundlesController', [ '$scope', function($scope, $state) {
            $scope.packages = [
                {id: 0, name: 'min', descr: 'ghnghjd'},
                {id: 1, name: 'med', descr: 'gfjnfhg'},
                {id: 2, name: 'full', descr: 'ghhmnfg'},
                {id: 3, name: 'large', descr: 'ghjmng'},
            ];
        }])
        .directive('bundles', function() {
            return {
                restrict: 'E',
                templateUrl: 'components/bundles/bundles.html'
            };
        });
})();