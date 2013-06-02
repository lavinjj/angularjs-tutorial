'use strict';

/* Directives */


Application.Directives.
    directive('uniqueUsername', ['UserResource', function (UserResource) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, elm, attrs, ctrl) {

                var validator = function (value) {
                    UserResource.query({"UserName": value}).then(function (result) {
                        if (result.length === 0) {
                            // it is valid
                            ctrl.$setValidity('uniqueUserName', true);
                        } else {
                            // it is invalid, return undefined (no model update)
                            ctrl.$setValidity('uniqueUserName', false);
                        }
                    });

                    return value;
                };

                ctrl.$formatters.push(validator);
                ctrl.$parsers.push(validator);
            }
        };
    }]);
