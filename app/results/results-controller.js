'use strict';

Application.Controllers.controller('results-controller', ['$scope', 'tutorialNotificationChannel', function($scope, tutorialNotificationChannel) {
    $scope.sourceFiles = [];
    $scope.currentSlide = null;

    $scope.onSlideChangedHandler = function (slide) {
        $scope.sourceFiles = [];
        $scope.currentSlide = slide;
    };

    tutorialNotificationChannel.onSlideChanged($scope, $scope.onSlideChangedHandler);


    $scope.onSlideSavedHandler = function(sourceFiles){
        $scope.sourceFiles = sourceFiles;
    };

    tutorialNotificationChannel.onSlideSaved($scope, $scope.onSlideSavedHandler);

    $scope.runCode = function () {
        tutorialNotificationChannel.runExample();
    };

}]);