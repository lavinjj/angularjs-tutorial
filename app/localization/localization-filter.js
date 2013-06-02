'use strict';

Application.Filters.filter('i18n', ['localize', function (localize) {
    return function (input) {
        var returnValue = localize.getLocalizedString(input);

        if ((returnValue === null) || (returnValue === '')) {
            // use the passed value is nothing was returned
            returnValue = input;
        }

        return returnValue;
    };
}]);