angular.module('application', ['application.services'])
//define the controller for view1
.controller('view1-controller', ['$scope', 'dataService', 'requestNotificationChannel', function($scope, dataService, requestNotificationChannel) {
    $scope.hops = dataService.getHops();

    var onDataUpdatedHandler = function() {
        $scope.hops = dataService.getHops();
    }

    requestNotificationChannel.onDataUpdated($scope, onDataUpdatedHandler);

    $scope.onEdit = function(hop) {
        requestNotificationChannel.editData(hop);
    }

    $scope.onDelete = function(hop) {
        dataService.deleteHop(hop);
    }
}]);
