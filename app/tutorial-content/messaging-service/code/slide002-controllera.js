angular.module('myApp')
    .controller('ControllerA', ['$scope', function($scope) {
        $scope.inputValue = '';

        $scope.valueUpdated = function(){
        };
    }]);