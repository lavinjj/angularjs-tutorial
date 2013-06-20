angular.module('myApp')
    .controller('ControllerB', ['$scope', function($scope) {
        $scope.displayValue = '';

        $scope.$on('_DATA_UPDATED_', function(event, args) {
            $scope.displayValue = args['value'];
        });
    }]);