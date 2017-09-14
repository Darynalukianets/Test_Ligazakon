// (function() {
//     'use strict';

function contactController($scope, $element, $attrs, $stateProvider) {
    var ctrl = this;

    ctrl.items3 = [
        { value: 'home', name: 'home'},
        { value: 'about', name: 'contact'}
    ];
}

angular.module('ligazakontestapp').component('contactPageComp', {
    templateUrl: 'components/contact/contact.html',
    controller: contactController
});

// })();