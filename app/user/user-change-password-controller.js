'use strict';

Application.Controllers.controller('user-change-password-controller', ['$scope', '$location', 'UserResource', 'authenticate', function ($scope, $location, UserResource, authenticate) {
    $scope.User = null;
    $scope.password = "";
    $scope.confirmpassword = "";
    $scope.errorMessages = [];

    $scope.errorsExist = function () {
        var result = false;
        $scope.errorMessages = [];

        if ($scope.registerForm.Password.$error.equal && !$scope.registerForm.Password.$pristine) {
            result = true;
            $scope.errorMessages.push('Passwords do not match.')
        }

        return result;
    };

    $scope.changePassword = function () {
        var brewer = new UserResource($scope.User);

        brewer.Password = authenticate.hashPassword($scope.password, brewer.DateJoined.valueOf());

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