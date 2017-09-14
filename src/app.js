(function() {
    'use strict';
    angular
        .module('ligazakontestapp', [
            'ui.bootstrap',
            'testligazakon.routing',
        ])
        .controller('MainController', ['$scope', function ($scope) {
            $scope.people = [
                { name: 'Paul', age: 50 },
                { name: 'Roy', age: 60},
                { name: 'Dan', age: 70}
                ];
        }]);
})();


