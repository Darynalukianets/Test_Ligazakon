/**
 * Created by Дарья on 13.09.2017.
 */
(function() {
    'use strict';

    angular.module('testligazakon.routing', [
        'ui.router'
    ])
        .config(routing);

    function routing ($stateProvider, $locationProvider) {
        $stateProvider
            .state('homePage', {
                url: '/',
                // templateUrl: 'components/home/home.html',
                name: 'home',
                component: 'homePageComp'
            })
            .state('contactPage', {
                url: '/contact',
                // templateUrl: 'components/contact/contact.html',
                name: 'contact',
                component: 'contactPageComp'
        });

        $locationProvider.html5Mode(true);
    }
})();