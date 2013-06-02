Application.Services
    .factory('authenticationNotificationChannel', ['$rootScope', 'configuration', function ($rootScope, configuration) {
    // private notification messages
    var _USER_UPDATED_ = configuration.messages.USER_UPDATED;

    // publish edit data notification
    var userUpdated = function (user) {
        $rootScope.$broadcast(_USER_UPDATED_, {user: user});
    };
    //subscribe to edit data notification
    var onUserUpdated = function($scope, handler) {
        $scope.$on(_USER_UPDATED_, function(event, args) {
            handler(args['user']);
        });
    };
    // return the publicly accessible methods
    return {
        userUpdated: userUpdated,
        onUserUpdated: onUserUpdated
    };
}])
