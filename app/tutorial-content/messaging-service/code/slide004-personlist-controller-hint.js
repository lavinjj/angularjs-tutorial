angular.module('myApp')
    .controller('PersonListController', ['$scope', '$location', 'persons', function ($scope, $location, persons) {
        $scope.persons = persons.getPersons();

        $scope.edit = function (index) {
            $location.path('/person/' + index);
        };
    }]);