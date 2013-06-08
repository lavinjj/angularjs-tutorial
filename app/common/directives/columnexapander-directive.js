'use strict';

/*
 * An Simple AngularJS Gravatar Directive
 *
 * Written by Jim Lavin
 * http://codingsmackdown.tv
 *
 */

Application.Directives.
    directive('columnExpander', [function () {
        return {
            restrict: "A",
            link: function (scope, elm, attrs) {
                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.columnExpander, function (value) {
                    if(value){
                        elm.removeClass(attrs.collapsedClass);
                        elm.addClass(attrs.expandedClass);
                    } else {
                        elm.removeClass(attrs.expandedClass);
                        elm.addClass(attrs.collapsedClass);
                    }
                });
                // start off collapsed
                elm.removeClass(attrs.expandedClass);
                elm.addClass(attrs.collapsedClass);
            }};
    }]);
