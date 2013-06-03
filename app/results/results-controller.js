'use strict';

Application.Controllers.controller('results-controller', ['$scope', 'tutorialNotificationChannel', function($scope, tutorialNotificationChannel) {
    $scope.sourceFiles = [];

    $scope.onRunExampleHandler = function(sourceFiles){
        $scope.sourceFiles = sourceFiles;
    };

    tutorialNotificationChannel.onRunExample($scope, $scope.onRunExampleHandler);
}]);