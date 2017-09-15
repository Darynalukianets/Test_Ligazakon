(function() {
    'use strict';

// function contactController($scope, $element, $attrs, $stateProvider) {
//     var ctrl = this;
//
//     ctrl.items3 = [
//         { value: 'home', name: 'home'},
//         { value: 'about', name: 'contact'}
//     ];
// }
//
// angular.module('ligazakontestapp').component('contactPageComp', {
//     templateUrl: 'components/contact/contact.html',
//     controller: contactController
// });
//
angular.module('ligazakontestapp')
    .controller('ContactController', [ '$scope', function($scope) {
        $scope.contacts = [
            { value: 'contact1' },
            { value: 'contact2' }
        ];
    }])
    .directive('contact', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/contact/contact.html'
        };
    });

})();