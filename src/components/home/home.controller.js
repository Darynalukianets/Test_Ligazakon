(function() {
    'use strict';

    angular.module('ligazakontestapp')
        .controller('HomeController', [ '$scope', '$http','imgFetchService',  function($scope, $http, imgFetchService) {
            $scope.slogan = {
                head: 'welcome to lorem',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            };
            $scope.services = [
                { header: 'lorem',
                  icon: 'assets/img/006-pencil.svg',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                { header: 'labore',
                    icon: 'assets/img/012-droplet.svg',
                    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                { header: 'dolore',
                    icon: 'assets/img/017-headphones.svg',
                    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                { header: 'incididunt',
                    icon: 'assets/img/034-library.svg',
                    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
            ];
            $scope.callImgFetchService = function() {
                imgFetchService($http);

            };
        }])
        .factory('imgFetchService', function($http) {
            return function imgFetchService($http) {
                
                $http({
                    method: 'GET',
                    url: 'https://pixabay.com/api/?key=3308117-c9257b382ed43215755094fa7&q=info&image_type=photo'
                }).then(function successCallback(response) {
                    var imgPreview = response.data.hits[0].previewURL,
                        imgFull = response.data.hits[0].webformatURL,
                        imgTags = response.data.hits[0].tags;

                    console.log('Image tags: ', imgTags);
                    console.log('Image preview size', imgPreview);
                    console.log('Image full size', imgFull);


                }, function errorCallback(response) {
                    console.log('error');
                });
            };
        });
})();
