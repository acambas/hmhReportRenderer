(function(){
    'use strict';

    var app = angular.module('app');

    app.controller('reportViewCtrl',['$scope','$stateParams', '$state', function ($scope,  $stateParams, $state) {

        if(!$stateParams.reportData){
            $state.go('upload');
        }

        console.log('sasa');
        console.log($stateParams);
        $scope.reportData =  $stateParams.reportData;
    }]);

}());