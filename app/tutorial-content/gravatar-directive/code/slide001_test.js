var myModule = angular.module("myModule", []);
myModule.controller("MyController", function($scope){
        $scope.salute = "Hello";

        $scope.alertMe = function() {
            alert($scope.salute);
        };
    }
);

angular.bootstrap($('#ng-app'), ['myModule']);
