var app = angular.module('securepoolin.controllers', [])

app.controller("secureCtrl", function ($scope, $timeout, $window, $interval, $document,$rootScope) {


    $scope.sectiononeleftzindexup=1;
    $scope.sectiononeleftzindexdown=0;

    $scope.sectiononerightzindexup=1;
    $scope.sectiononerightzindexdown=0;
});