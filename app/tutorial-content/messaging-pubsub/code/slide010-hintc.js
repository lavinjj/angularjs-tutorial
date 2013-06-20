angular.module('myApp')
    .controller('ControllerB', ['$scope', 'requestNotificationChannel', function ($scope, requestNotificationChannel) {
        $scope.person = null;

        var onEditDataHandler = function(item) {
            $scope.person = item;
        };

        requestNotificationChannel.onEditData($scope, onEditDataHandler);

        $scope.save = function(){
            requestNotificationChannel.dataUpdated($scope.person);
            $scope.person = null;
        };

        $scope.cancel = function(){
            $scope.person = null;
        };
    }]);
