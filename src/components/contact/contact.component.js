(function() {
    'use strict';

angular.module('ligazakontestapp')
    .controller('ContactController', [ '$scope', function($scope) {
        $scope.contacts = [
            { value: 'contact1' },
            { value: 'contact2' }
        ];
    }]);

})();