import angular from 'angular';

import 'angular-ui-bootstrap';

angular.module('LigazakonTestApp', [])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.people = [
            { name: 'Paul', age: 50 },
            { name: 'Roy', age: 60},
            {name: 'Dan', age: 70}
        ];
    }]);


