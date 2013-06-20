angular.module('myApp')
    // define the request notification channel for the pub/sub service
    .factory('requestNotificationChannel', ['$rootScope', function ($rootScope) {
        // private notification messages
        var _EDIT_DATA_ = '_EDIT_DATA_';
        var _DATA_UPDATED_ = '_DATA_UPDATED_';

        // publish edit data notification
        // should pass an item in the arguments

        //subscribe to edit data notification
        // should pass an item to the handler

        // publish data changed notification
        // should pass an item in the arguments

        // subscribe to data changed notification
        // should pass an item to the handler

        // return the publicly accessible methods
        return {
            editData: editData,
            onEditData: onEditData,
            dataUpdated: dataUpdated,
            onDataUpdated: onDataUpdated
        };
    }]);
