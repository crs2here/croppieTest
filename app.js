var app = angular.module('myApp', ['ngCroppie']);


    app.controller('basicController', ['$scope', function($scope) {

            $scope.doubleWrap = "{{outputImage}}"

            var handleFileSelect=function(evt) {
              var file=evt.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function (evt) {
                $scope.$apply(function($scope){
                  $scope.theImage1 = evt.target.result;
                });
              };
              reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);


            $scope.onUpdate = function(data){
                //console.log(data)
            }
    }]);
