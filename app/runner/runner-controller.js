'use strict';

Application.Controllers.controller('runner-controller', ['$scope', 'tutorialNotificationChannel', function($scope, tutorialNotificationChannel) {
    $scope.sourceFiles = [];

    $scope.onSlideChangedHandler = function (slide) {
        $scope.sourceFiles = [];
    };

    tutorialNotificationChannel.onSlideChanged($scope, $scope.onSlideChangedHandler);


    $scope.onRunExampleHandler = function(sourceFiles){
        $scope.sourceFiles = sourceFiles;
    };

    tutorialNotificationChannel.onRunExample($scope, $scope.onRunExampleHandler);
}]);