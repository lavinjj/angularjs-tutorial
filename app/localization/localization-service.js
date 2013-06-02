'use strict';

Application.Services.factory('localize', ['$http', '$rootScope', '$window', '$filter', function($http, $rootScope, $window, $filter) {
    var localize = {
        // use the $window service to get the language of the user's browser
        language: $window.navigator.userLanguage || $window.navigator.language,
        // array to hold the localized resource string entries
        dictionary: [],

        successCallback: function(data) {
            // store the returned array in the dictionary
            localize.dictionary = data;
            // broadcast that the file has been loaded
            $rootScope.$broadcast('localizeResourcesUpdated');
        },

        setLanguage: function(value) {
            localize.language = value;
            localize.initLocalizedResources();
        },

        initLocalizedResources: function() {
            // build the url to retrieve the localized resource file
            var url = '/app/i18n/resources-locale_' + localize.language + '.js';

            // request the resource file
            $http({ method: "GET", url: url, cache: false }).success(localize.successCallback).error(function () {
                // the request failed set the url to the default resource file
                var url = '/app/i18n/resources-locale_default.js';
                // request the default resource file
                $http({ method: "GET", url: url, cache: false }).success(localize.successCallback);
            });
        },

        getLocalizedString: function(value) {
            // default the result to an empty string
            var result = '';

            // make sure the dictionary has valid data
            if ((localize.dictionary !== []) && (localize.dictionary.length > 0)) {
                // use the filter service to only return those entries which match the value
                // and only take the first result
                var entry = $filter('filter')(localize.dictionary, function(element) {
                        return element.key === value;
                    }
                )[0];

                // set the result
                result = entry.value;
            }
            // return the value to the call
            return result;
        }
    };

    // force service to load the language resource file
    localize.initLocalizedResources();

    // return the local instance when called
    return localize;
}]);
