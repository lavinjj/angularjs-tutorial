angular.module('application.services', [])
    // define the request notification channel for the pub/sub service
    .factory('requestNotificationChannel', ['$rootScope', function ($rootScope) {
        // private notification messages
        var _EDIT_DATA_ = '_EDIT_DATA_';
        var _DATA_UPDATED_ = '_DATA_UPDATED_';

        // publish edit data notification
        var editData = function (item) {
            $rootScope.$broadcast(_EDIT_DATA_, {item: item});
        };
        //subscribe to edit data notification
        var onEditData = function ($scope, handler) {
            $scope.$on(_EDIT_DATA_, function (event, args) {
                handler(args.item);
            });
        };
        // publish data changed notification
        var dataUpdated = function () {
            $rootScope.$broadcast(_DATA_UPDATED_);
        };
        // subscribe to data changed notification
        var onDataUpdated = function ($scope, handler) {
            $scope.$on(_DATA_UPDATED_, function (event) {
                handler();
            });
        };
        // return the publicly accessible methods
        return {
            editData: editData,
            onEditData: onEditData,
            dataUpdated: dataUpdated,
            onDataUpdated: onDataUpdated
        };
    }]);
