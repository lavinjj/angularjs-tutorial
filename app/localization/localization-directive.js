'use strict';

Application.Directives.directive('i18n', ['localize', function (localize) {
    var i18NDirective = {
        restrict: "EAC",
        updateText:function(elm, token){
            var values = token.split('|');
            if (values.length >= 1) {
                // construct the tag to insert into the element
                var tag = localize.getLocalizedString(values[0]);
                // update the element only if data was returned
                if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                    if (values.length > 1) {
                        for (var index = 1; index < values.length; index++) {
                            var target = '{' + (index - 1) + '}';
                            tag = tag.replace(target, values[index]);
                        }
                    }
                    // insert the text into the element
                    elm.text(tag);
                }
            }
        },
        link: function (scope, elm, attrs) {
            scope.$on('localizeResourcesUpdated', function() {
                i18NDirective.updateText(elm, attrs.i18n);
            });

            attrs.$observe('i18n', function (value) {
                i18NDirective.updateText(elm, value);
            });
        }
    };

    return i18NDirective;
}]);

Application.Directives.directive('i18nPassthrough', ['localize', function (localize) {
    var i18NPassThroughDirective = {
        restrict: "EAC",
        updateText:function(elm, token){
            var values = token.split('|');
            if (values.length >= 1) {
                // construct the tag to insert into the element
                var tag = localize.getLocalizedString(values[0]);
                // update the element only if data was returned
                if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                    if (values.length > 1) {
                        for (var index = 1; index < values.length; index++) {
                            var target = '{' + (index - 1) + '}';
                            tag = tag.replace(target, values[index]);
                        }
                    }
                    // insert the text into the element
                    elm.text(tag);
                } else {
                    elm.text(token);
                }
            }
        },
        link: function (scope, elm, attrs) {
            scope.$on('localizeResourcesUpdated', function() {
                i18NPassThroughDirective.updateText(elm, attrs.i18nPassThrough);
            });

            attrs.$observe('i18nPassthrough', function (value) {
                i18NPassThroughDirective.updateText(elm, value);
            });
        }
    };

    return i18NPassThroughDirective;
}]);

Application.Directives.directive('i18nAttr', ['localize', function (localize) {
    var i18NAttrDirective = {
        restrict: "EAC",
        updateText:function(elm, token){
            var values = token.split('|');
            // construct the tag to insert into the element
            var tag = localize.getLocalizedString(values[0]);
            // update the element only if data was returned
            if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                if (values.length > 2) {
                    for (var index = 2; index < values.length; index++) {
                        var target = '{' + (index - 2) + '}';
                        tag = tag.replace(target, values[index]);
                    }
                }
                // insert the text into the element
                elm.attr(values[1], tag);
            }
        },
        link: function (scope, elm, attrs) {
            scope.$on('localizeResourcesUpdated', function() {
                i18NAttrDirective.updateText(elm, attrs.i18nAttr);
            });

            attrs.$observe('i18nAttr', function (value) {
                i18NAttrDirective.updateText(elm, value);
            });
        }
    };

    return i18NAttrDirective;
}]);

