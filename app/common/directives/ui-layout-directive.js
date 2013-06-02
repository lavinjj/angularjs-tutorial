Application.Directives
    .value('ui.config', {
    uiLayout: {
        applyDemoStyles: true
    }
})
    .directive('uiLayout', ['ui.config', function (uiConfig) {
    var options = uiConfig.uiLayout || {};
    return {

        priority:0,
        restrict: 'EA',
        compile: function (tElm, tAttrs) {
            if (angular.isUndefined(window.jQuery)) {
                throw new Error('ui-jq: Need jQuery, maybe...');
            }
            if (!angular.isFunction($(tElm).layout)) {
                throw new Error('ui-jq: Need jquery.layout, maybe...');
            }
            return function(scope, iElement, iAttr){
                options = angular.extend({}, options, scope.$eval(tAttrs.uiLayout));
                $(tElm).layout(options);
            };

        }
    };
}])
    .directive('uiLayoutCenter', ['ui.config', function (uiConfig) {
    return {
        priority:1,
        restrict: 'EA',
        transclude:true,
        replace:true,
        template:'<div class="ui-layout-center"><div ng-transclude></div></div>'
    };
}])
    .directive('uiLayoutNorth', ['ui.config', function (uiConfig) {
    return {
        priority:1,
        restrict: 'EA',
        transclude:true,
        replace:true,
        template:'<div class="ui-layout-north"><div ng-transclude></div></div>'
    };
}])
    .directive('uiLayoutSouth', ['ui.config', function (uiConfig) {
    return {
        priority:1,
        restrict: 'EA',
        transclude:true,
        replace:true,
        template:'<div class="ui-layout-south"><div ng-transclude></div></div>'
    };
}])
    .directive('uiLayoutEast', ['ui.config', function (uiConfig) {
    return {
        priority:1,
        restrict: 'EA',
        transclude:true,
        replace:true,
        template:'<div class="ui-layout-east"><div ng-transclude></div></div>'
    };
}])
    .directive('uiLayoutWest', ['ui.config', function (uiConfig) {
    return {
        priority:1,
        restrict: 'EA',
        transclude:true,
        replace:true,
        template:'<div class="ui-layout-west"><div ng-transclude></div></div>'
    };
}]);
