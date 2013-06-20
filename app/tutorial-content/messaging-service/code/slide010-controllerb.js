angular.module('myApp')
    .controller('ControllerB', ['$scope', function ($scope) {
        $scope.person = null;

        // and on edit handler here

        $scope.save = function(){
            // add data update call here
            $scope.person = null;
        };

        $scope.cancel = function(){
            $scope.person = null;
        };
    }]);
