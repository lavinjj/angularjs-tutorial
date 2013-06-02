'use strict';

Application.Controllers.controller('login-controller', ['$scope', '$location', 'authenticate', 'UserResource', function ($scope, $location, authenticate, UserResource) {
    $scope.login = new tutorial.LogIn();
    $scope.currentUser = null;

    $scope.$on('USER_UPDATED', function () {
        $scope.currentUser = authenticate.currentUser;

        var brewer = new UserResource($scope.currentUser);

        $scope.currentUser.DateLastActivity = new Date();

        brewer.$update();
    });

    $scope.login = function () {
        authenticate.login($scope.login.userName, $scope.login.password);
        $scope.login = new tutorial.LogIn();
    };

    $scope.logout = function () {
        authenticate.logout();
    };

    $scope.register = function () {
        $location.path('/register');
    };

    $scope.isUserLoggedIn = function () {
        return authenticate.isUserLoggedIn();
    };
}]);