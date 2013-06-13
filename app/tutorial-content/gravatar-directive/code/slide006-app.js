// Declare app level module which depends on filters, and services
var Sample = angular.module('sample', []);

Sample.controller('myController', ['$scope', function ($scope) {
        $scope.email = 'jlavin@jimlavin.net';

    }]);

