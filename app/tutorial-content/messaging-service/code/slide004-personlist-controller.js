angular.module('myApp')
    .controller('PersonListController', ['$scope', '$location', 'persons', function ($scope, $location, persons) {
        $scope.persons = persons.getPersons();

        // provide a method to change the Url to the person view with the index of the person to edit
    }]);