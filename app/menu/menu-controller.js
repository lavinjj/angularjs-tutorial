'use strict';

Application.Controllers.controller('menu-controller', ['$scope', '$location', 'authenticate', function($scope, $location, authenticate) {
    $scope.currentUser = null;

    $scope.$on('USER_UPDATED', function() {
        $scope.currentUser = authenticate.currentUser;
    });

    $scope.userIsAdmin = function() {
        if(($scope.currentUser !== null) && ($scope.currentUser !== undefined)){
            return $scope.currentUser.userIsAdmin;
        }

        return false;
    };

    $scope.isUserLoggedIn = function() {
        return authenticate.isUserLoggedIn();
    };
}]);