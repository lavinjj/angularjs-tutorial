'use strict';

Application.Controllers.controller('home-controller', ['$scope', '$location', 'authenticate', 'localize', 'tutorial', 'tutorialNotificationChannel', 'UserResource', function($scope, $location, authenticate, localize, tutorial, tutorialNotificationChannel, UserResource) {
    $scope.myInterval = 2000;
    $scope.slides = [
        {image: './images/Do-And-Understand-Banner_01.png',text: ''},
        {image: './images/Do-And-Understand-Banner_02.png',text: ''},
        {image: './images/Do-And-Understand-Banner_03.png',text: ''},
        {image: './images/Do-And-Understand-Banner_04.png',text: ''},
        {image: './images/Do-And-Understand-Banner_05.png',text: ''},
        {image: './images/Do-And-Understand-Banner_06.png',text: ''}
    ];

    $scope.TopContributors = [];
    $scope.lessons = [];

    $scope.onLessonsLoadedHandler = function(lessons){
        $scope.lessons = lessons;
    };

    tutorialNotificationChannel.onLessonsLoaded($scope, $scope.onLessonsLoadedHandler);

    $scope.init = function() {
        tutorial.getLessons();

        UserResource.query({}, {sort:{"Ratings":-1, "DateUpdated":-1}, limit:5}).then(function (users) {
            $scope.TopContributors = users;
        });
    };

    $scope.startTutorial = function(index){
        $location.path('/tutorial/' + index);
    };

    $scope.init();
}]);