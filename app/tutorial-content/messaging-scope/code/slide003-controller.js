angular.module('myApp')
    .controller('ControllerA', ['$scope', function($scope) {
        $scope.currentQuestion = {
            question: 'Select One: AngularJS ...',
            answers: [
                {value: 'A', text: 'Rocks!'},
                {value: 'B', text: 'Is Awsome Sauce!'},
                {value: 'C', text: 'FTW!'},
                {value: 'D', text: 'All of the above'}
            ]
        };
        $scope.selectedAnswer = '';

    }]);