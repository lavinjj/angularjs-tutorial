'use strict';

Application.Controllers.controller('tutorial-controller', ['$scope', '$http', 'tutorial', 'tutorialNotificationChannel', function($scope, $http, tutorial, tutorialNotificationChannel) {
    $scope.Title = 'AngularJS Unit Testing';
    $scope.currentPage = 0;
    $scope.slides = [];
    $scope.currentSlide = null;
    $scope.markdown = '# Slide Failed to Load';

    $scope.onSlidesLoadedHandler = function(slides){
        $scope.currentPage = 0;
        $scope.slides = slides;
        $scope.loadSlide($scope.currentPage);
    };

    tutorialNotificationChannel.onSlidesLoaded($scope, $scope.onSlidesLoadedHandler);

    $scope.onMarkdownLoadedHandler = function(markdown){
        $scope.markdown = markdown;
    };

    tutorialNotificationChannel.onMarkdownLoaded($scope, $scope.onMarkdownLoadedHandler);

    $scope.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };

    $scope.loadSlide = function(index){
        $scope.currentSlide = $scope.slides[$scope.currentPage];
        tutorial.getMarkdown($scope.currentSlide.markdownUrl);
        tutorialNotificationChannel.slideChanged($scope.currentSlide);
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
        $scope.loadSlide($scope.currentPage);
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.slides.length - 1) {
            $scope.currentPage++;
        }
        $scope.loadSlide($scope.currentPage);
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
        $scope.loadSlide($scope.currentPage);
    };

    $scope.init = function() {
        tutorial.getSlides();
    };

    $scope.init();
}]);