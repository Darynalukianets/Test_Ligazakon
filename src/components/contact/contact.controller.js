(function() {
    'use strict';

angular.module('ligazakontestapp')
    .controller('ContactController', [ '$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);

            console.log('Fullname:', $scope.master.fullname);
            console.log('Email:',$scope.master.mail);
            console.log('Message text:', $scope.master.message);

            $scope.reset();
        };

        $scope.reset = function(contactForm) {
            if(contactForm) {
                contactForm.$setPristine();
                contactForm.$setUntouched();
            }
            $scope.user ={};
        };
    }]);

})();