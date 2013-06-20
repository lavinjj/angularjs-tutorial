angular.module('myApp')
    .controller('ControllerA', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.inputValue = '';

        $scope.valueUpdated = function(){
            $rootScope.$broadcast('_DATA_UPDATED_', { value: $scope.inputValue});
        };
    }]);