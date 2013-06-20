angular.module('myApp')
    .controller('PersonEditController', ['$scope', '$routeParams', '$location', 'persons', function ($scope, $routeParams, $location, persons) {
        $scope.person = persons.getPerson($routeParams['index']);

        $scope.save = function () {
            persons.updatePerson($routeParams['index'], $scope.person);
            $location.path('/');
            $scope.person = null;
        };

        $scope.cancel = function () {
            $scope.person = null;
        };
    }]);