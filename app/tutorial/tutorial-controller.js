'use strict';

Application.Controllers.controller('tutorial-controller', ['$scope', '$http', '$routeParams', 'tutorial', 'tutorialNotificationChannel', function($scope, $http, $routeParams, tutorial, tutorialNotificationChannel) {
    $scope.Title = 'AngularJS Unit Testing';
    $scope.lessons = [];
    $scope.currentPage = 0;
    $scope.slides = [];
    $scope.currentSlide = null;
    $scope.markdown = '# Slide Failed to Load';
    $scope.expandColumn = false;

    $scope.onLessonsLoadedHandler = function(lessons){
        $scope.lessons = lessons;
        if($scope.lessons && $scope.lessons.length){
            var index = parseInt($routeParams['index'], 10);
            var lesson = $scope.lessons[index];
            tutorial.getSlides(lesson.slideUrl);
        }
    };

    tutorialNotificationChannel.onLessonsLoaded($scope, $scope.onLessonsLoadedHandler);

    $scope.onSlideChangedHandler = function (slide) {
        $scope.currentSlide = slide;
        $scope.expandColumn = ((slide.code.length === 0) && (slide.enableRun === false));
    };

    tutorialNotificationChannel.onSlideChanged($scope, $scope.onSlideChangedHandler);



    $scope.init = function() {
        tutorial.getLessons();
    };

    $scope.init();
}]);