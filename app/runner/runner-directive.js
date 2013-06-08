Application.Directives.
    directive('scenarioRunner', ['$http', function ($http) {
        return {
            restrict: 'A',
            requires: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.scenarioRunner, function (newValue) {
                    if (newValue) {
                        generateHTMLOutput(newValue);
                    }
                });

                var generateHTMLOutput = function (slideFile) {
                    var cssFiles = '';
                    var javaScriptFiles = '';
                    var javaScript = '';
                    var htmlScripts = '';
                    var cssScripts = '';
                    // walk each css file and build the link reference for it
                    angular.forEach(slideFile.cssfiles, function (file) {
                        cssFiles = cssFiles + buildCssTemplate(file);
                    });
                    // walk each java script file and build the script tag for it
                    angular.forEach(slideFile.javascriptFiles, function (file) {
                        javaScriptFiles = javaScriptFiles + buildJavaScriptTemplate(file);
                    });
                    // walk each of the slide's source files and build the appropriate
                    // type of tag to include into the html template
                    angular.forEach(slideFile.sourceFiles, function (sourceFile) {
                        if (sourceFile.mode === 'javascript') {
                            javaScript = javaScript + buildJavaScriptTemplate("", buildOnLoad(sourceFile.source));
                        }
                        if (sourceFile.mode === 'json') {
                            javaScript = javaScript + buildJavaScriptTemplate("", buildOnLoad(sourceFile.source));
                        }
                        if (sourceFile.mode === 'text/html') {
                            htmlScripts = htmlScripts + sourceFile.source;
                        }
                        if (sourceFile.mode === 'css') {
                            cssScripts = cssScripts + buildCssTemplate("", sourceFile);
                        }
                    });
                    // insert the html source fragments into the html template
                    var htmlTemplate = cssFiles;
                    htmlTemplate = htmlTemplate + '\r' + cssScripts;
                    htmlTemplate = htmlTemplate + '\r' + htmlScripts;
                    htmlTemplate = htmlTemplate + '\r' + javaScriptFiles;
                    htmlTemplate = htmlTemplate + '\r' + javaScript;

                    document.write(htmlTemplate);
                    var $runner = new angular.scenario.Runner(window),
                        scripts = document.getElementsByTagName('script'),
                        script = scripts[scripts.length - 1],
                        config = {};

                    angular.forEach(script.attributes, function(attr) {
                        var match = attr.name.match(/ng[:\-](.*)/);
                        if (match) {
                            config[match[1]] = attr.value || true;
                        }
                    });

                    angular.scenario.setUpAndRun(config);
                };

                var loadHTMLTemplate = function (url) {
                    return $http({ method: "GET", url: url, cache: false });
                };

                var buildCssTemplate = function (src, content) {
                    content = content || '';
                    src = src || '';

                    if (src) {
                        var scriptTag = '<link ';
                        var attributes = src ? 'href="' + src + '"' : '';
                        var scriptEndTag = ' rel="stylesheet">';
                        return scriptTag + attributes + scriptEndTag + '\r';
                    }
                    if (content) {
                        return '<style type="text/css">\r' + content + '</style>\r';
                    }
                };

                var buildJavaScriptTemplate = function (src, content) {
                    content = content || '';

                    var scriptTag = '<script ';
                    var attributes = src ? 'src="' + src + '"' : '';
                    var scriptEndTag = '</script>';
                    return scriptTag + attributes + '>' + content + scriptEndTag + '\r';
                };

                var buildOnLoad = function (currentJavascript) {
                    return "\rwindow.onload = function() {\rtry { "
                        + currentJavascript
                        + "\r} catch (e) { alert('Not working: ' + e) }}";
                };
            }
        };
    }]);
