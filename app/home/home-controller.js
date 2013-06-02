'use strict';

Application.Controllers.controller('home-controller', ['$scope', '$location', 'authenticate', 'localize', 'CigarResource', 'RatingResource', 'UserResource', function($scope, $location, authenticate, localize, CigarResource, RatingResource, UserResource) {
    $scope.myInterval = 5000;
    $scope.slides = [
        {image: '/app/images/Rate-A-Stogie-Banner_01.png',text: 'Today’s cigar smokers are increasingly selective and perceptive, and are eager to hone their skills of enjoying premium cigars.'},
        {image: '/app/images/Rate-A-Stogie-Banner_02.png',text: 'Limited production, high quality stogies are always emerging and evolving and require the complements of proper storage and aging that you can provide.'},
        {image: '/app/images/Rate-A-Stogie-Banner_03.png',text: 'Even a once immature, coarse tasting and rough burning smoke may gain balance and richness just from laying down in your properly maintained humidor for an appropriate time.'},
        {image: '/app/images/Rate-A-Stogie-Banner_04.png',text: 'Long-term aging is not a practice for the average smoker, but rather a luxury embraced by the connoisseur smoker and hobbyist.'},
        {image: '/app/images/Rate-A-Stogie-Banner_05.png',text: 'Having a standardized cigar rating system can be very useful. You want to be able to compare different cigars, rated by different people, in different places at different times.'},
        {image: '/app/images/Rate-A-Stogie-Banner_06.png',text: 'There is no cigar rating system that is perfect, and there probably never will be!'},
        {image: '/app/images/Rate-A-Stogie-Banner_07.png',text: 'Here\'s one that we believe is amongst the best available.'},
        {image: '/app/images/Rate-A-Stogie-Banner_08.png',text: 'Rate A Stogie - The social site that allows you to review cigars.'}
    ];
    $scope.TopRatedCigars = [];
    $scope.NewReviews = [];
    $scope.TopContributors = [];

    $scope.init = function() {
        CigarResource.query({}, {sort:{"AverageRating":-1, "DateUpdated":-1}, limit:5}).then(function (result) {
            $scope.TopRatedCigars = result;
        });
        RatingResource.query({}, {sort:{"ReviewDate":-1}, limit:5}).then(function (result) {
            $scope.NewReviews = result;
        });
        UserResource.query({}, {sort:{"Ratings":-1, "DateUpdated":-1}, limit:5}).then(function (users) {
            $scope.TopContributors = users;
        });
    };

    $scope.init();
}]);