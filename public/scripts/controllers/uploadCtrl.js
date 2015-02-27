
(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('uploadCtrl',['$scope', '$upload', '$state', function ($scope, $upload, $state) {

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    $upload.upload({
                        url: 'upload',
                        fields: {'username': $scope.username},
                        file: file
                    }).success(function (data, status, headers, config) {
                        console.log('file ' + config.file.name + 'uploaded. Response: ' + data);

                        $state.go('reportView', {reportData:data});
                    });
                }
            }
        };

    }]);

}());