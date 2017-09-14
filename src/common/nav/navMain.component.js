// (function() {
//     'use strict';

    function navController($scope, $element, $attrs) {
        var ctrl = this;

        ctrl.items = [
            { value: 'home', state: '' },
            { value: 'about', state: '' }
        ];
    }

    angular.module('ligazakontestapp').component('navComp', {
        templateUrl: 'common/nav/navMain.html',
        controller: navController
    });

// })();
