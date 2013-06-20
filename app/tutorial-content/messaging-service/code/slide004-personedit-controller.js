angular.module('myApp')
    .controller('PersonEditController', ['$scope', '$routeParams', '$location', 'persons', function ($scope, $routeParams, $location, persons) {
        $scope.person = // add code here to get the person from teh persons service with the correct index

        $scope.save = function () {
            // add code here to call the updatePerson method with the update person object and the correct index
            $location.path('/');
            $scope.person = null;
        };

        $scope.cancel = function () {
            $scope.person = null;
        };
    }]);