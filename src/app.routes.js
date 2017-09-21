(function() {
    'use strict';

    angular.module('testligazakon.routing', [
        'ui.router'
    ])
        .config(routing);

    function routing ($stateProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home/home.html',
                name: 'home'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'components/contact/contact.html',
                name: 'contact'
        })
            .state('about', {
                url: '/about',
                templateUrl: 'components/about/about.html',
                name: 'about',
            })
            .state('about.bundles', {
                abstract: true,
                url: '/bundles',
                template: '<ui-view/>',
                controller: 'BundlesController'
            })
            .state('about.bundles.list', {
                url: '/list',
                templateUrl: 'components/bundles/bundles.list.html'
            })
            .state('about.bundles.descr', {
                url: '/:id',
                templateUrl: 'components/bundles/bundles.descr.html',
                controller: function($scope, $stateParams){
                    $scope.item = $scope.packages[$stateParams.id];
                },
            });

        $locationProvider.html5Mode(true);
    }
})();