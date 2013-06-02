Application.Directives
    .directive('markDown', function () {
        var converter = new Markdown.Converter();
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                if (attrs.markDown) {
                    scope.$watch(attrs.markDown, function (newVal) {
                        var html = converter.makeHtml(newVal);
                        element.html(html);
                    });
                } else {
                    var html = converter.makeHtml(element.text());
                    element.html(html);
                }
            }
        };
    });