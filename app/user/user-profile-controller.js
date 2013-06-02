'use strict';

Application.Controllers.controller('user-profile-controller', ['$scope', '$location', 'UserResource', 'authenticate', function ($scope, $location, UserResource, authenticate) {
    $scope.User = null;
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;

        $scope.errorMessages = [];

        if ($scope.registerForm.FirstName.$error.required && !$scope.registerForm.FirstName.$pristine) {
            result = true;
            $scope.errorMessages.push('First Name is required.')
        }
        if ($scope.registerForm.LastName.$error.required && !$scope.registerForm.LastName.$pristine) {
            result = true;
            $scope.errorMessages.push('Last Name is required.')
        }

        return result;
    };

    $scope.changeEmail = function () {
        $location.path('/myemail');
    };

    $scope.changePassword = function () {
        $location.path('/mypassword');
    };

    $scope.register = function () {
        var user = new UserResource($scope.User);

        user.$update(function (user) {
            $location.path('/');
        });
    };

    $scope.init = function () {
        if (!authenticate.isUserLoggedIn()) {
            $location.path('/');
        }

        $scope.User = authenticate.currentUser;
    };

    $scope.init();
}]);