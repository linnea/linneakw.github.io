/* app.js
 *  main script file
 * */

"use strict";
//$(document).ready(function() {
    angular.module('Gallery', [])
        .controller('GalleryCtrl', function($scope) {
            var imageGallery = [];
            var activeHover = false;
            for(var i = 0; i < 10; i++) {
                var image = {
                    picUrl: 'img/house' + i + '.jpg',
                    bwUrl: 'img/housebw' + i + '.jpg',
                    display: 'img/house' + i + '.jpg',
                    active: false
                };
                imageGallery.push(image);
            }
            $scope.images = imageGallery;
            $scope.onHover = function(img) {
                img.image.active = true;
                for (var i = 0; i < 10; i++) {
                    if (!imageGallery[i].active) {
                        imageGallery[i].display = imageGallery[i].bwUrl;
                    }
                }
            };

            $scope.onOut = function(img) {
                for (var i = 0; i < 10; i++) {
                    imageGallery[i].display = imageGallery[i].picUrl;
                    imageGallery[i].active = false;
                }
            }
        });
//});
