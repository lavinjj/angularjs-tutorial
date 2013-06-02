// based on climboid / angular-slider by Oscar Villareal
Application.Directives.
    directive('slider', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                // undefined attrs on the element will use the jquery UI defaults
                element.slider({
                    min: attrs.min,
                    max: attrs.max,
                    value: ctrl.$modelValue,
                    step: attrs.step,
                    slide: function (event, ui) {
                        ctrl.$setViewValue(ui.value);
                        scope.$apply();
                    }
                });

                scope.$watch(attrs.ngModel, function (value) {
                    element.slider("option", "value", value);
                });
            }
        };
    });