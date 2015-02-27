(function () {
    'use strict';

    var app = angular.module('app', ['ngAnimate', 'ui.router', 'ng.httpLoader', 'angularFileUpload']);


    app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('upload',{
            url:'/',
            templateUrl:'scripts/views/upload.html',
            controller:'uploadCtrl'
        })
            .state('reportView', {
                url:'/reportview',
                templateUrl:'scripts/views/reportView.html',
                controller:'reportViewCtrl',
                params : { reportData: null }
            });

    }]);

}());
