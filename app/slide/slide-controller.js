'use strict';

Application.Controllers.controller('slide-controller', ['$scope', '$http', 'tutorial', 'tutorialNotificationChannel', 'Angularytics', function($scope, $http, tutorial, tutorialNotificationChannel, Angularytics) {
    $scope.Title = 'AngularJS Unit Testing';
    $scope.currentPage = 0;
    $scope.slides = [];
    $scope.currentSlide = null;
    $scope.markdown = '# Slide Failed to Load';

    $scope.onSlidesLoadedHandler = function(slides){
        $scope.currentPage = 0;
        $scope.slides = slides;
        Angularytics.trackEvent("View Slide", $scope.currentPage + 1);
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
        Angularytics.trackEvent("View Slide", $scope.currentPage + 1);
        $scope.loadSlide($scope.currentPage);
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.slides.length - 1) {
            $scope.currentPage++;
        }
        Angularytics.trackEvent("View Slide", $scope.currentPage + 1);
        $scope.loadSlide($scope.currentPage);
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
        Angularytics.trackEvent("View Slide", $scope.currentPage + 1);
        $scope.loadSlide($scope.currentPage);
    };
}]);