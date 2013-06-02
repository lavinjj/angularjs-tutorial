'use strict';

Application.Controllers.controller('user-change-email-controller', ['$scope', '$location', 'UserResource', 'authenticate', function ($scope, $location, UserResource, authenticate) {
    $scope.User = null;
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;

        $scope.errorMessages = [];

        if ($scope.registerForm.Email.$error.required && !$scope.registerForm.LastName.$pristine) {
            result = true;
            $scope.errorMessages.push('Email is required.')
        }
        if ($scope.registerForm.Email.$error.uniqueEmail && !$scope.registerForm.Email.$pristine) {
            result = true;
            $scope.errorMessages.push('That Email already has an account.')
        }

        return result;
    };

    $scope.changeEmail = function () {
        var brewer = new UserResource($scope.User);

        brewer.$update(function (brewer) {
            $location.path('/');
        });
    };

    $scope.init = function () {
        if (!authenticate.isBrewerLoggedIn()) {
            $location.path('/');
        }

        $scope.User = authenticate.currentBrewer;
    };

    $scope.init();
}]);