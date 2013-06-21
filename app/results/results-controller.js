'use strict';

Application.Controllers.controller('results-controller', ['$scope', 'tutorialNotificationChannel', 'Angularytics', function($scope, tutorialNotificationChannel, Angularytics) {
    $scope.sourceFiles = [];
    $scope.currentSlide = null;

    $scope.onSlideChangedHandler = function (slide) {
        $scope.sourceFiles = [{}];
        $scope.currentSlide = slide;
    };

    tutorialNotificationChannel.onSlideChanged($scope, $scope.onSlideChangedHandler);


    $scope.onSlideSavedHandler = function(sourceFiles){
        $scope.sourceFiles = sourceFiles;
    };

    tutorialNotificationChannel.onSlideSaved($scope, $scope.onSlideSavedHandler);

    $scope.runCode = function () {
        Angularytics.trackEvent($scope.currentSlide.lesson, "Run Code");
        tutorialNotificationChannel.runExample();
    };

}]);