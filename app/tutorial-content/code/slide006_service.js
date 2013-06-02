'use strict';

Application.Services = angular.module('localize');

Application.Services.factory('localize', ['$http', '$rootScope', '$window', '$filter', function($http, $rootScope, $window, $filter) {
    var localize = {

    };

    // return the local instance when called
    return localize;
}]);
