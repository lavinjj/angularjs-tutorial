angular.module('myApp')
    .controller('HelloWorldController', ['$scope', function($scope){
        $scope.greeting = 'World';
    }]);