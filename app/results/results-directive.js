Application.Directives.
    directive('resultsIframe', ['$http', function ($http) {
        return {
            restrict: 'A',
            requires: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.resultsIframe, function (newValue) {
                    if (newValue) {
                        generateHTMLOutput(newValue);
                    }
                });

                var generateHTMLOutput = function (slideFile) {
                    if(slideFile.htmlTemplate){
                        // load the html template
                        loadHTMLTemplate(slideFile.htmlTemplate).then(function (response) {

                            // assign the response to the local var
                            var htmlTemplate = response.data;
                            var cssFiles = '';
                            var javaScriptFiles = '';
                            var javaScript = '';
                            var jsContent = ''
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
                                    jsContent = jsContent + sourceFile.source + '\r';
                                }
                                if (sourceFile.mode === 'json') {
                                    jsContent = jsContent + sourceFile.source + '\r';
                                }
                                if (sourceFile.mode === 'text/html') {
                                    htmlScripts = htmlScripts + sourceFile.source;
                                }
                                if (sourceFile.mode === 'css') {
                                    cssScripts = cssScripts + buildCssTemplate("", sourceFile);
                                }
                            });

                            javaScript = buildJavaScriptTemplate('', buildOnLoad(jsContent));
                            // insert the html source fragments into the html template
                            var htmlTemplate = htmlTemplate.replace("<!-- CSS Files Here -->", cssFiles);
                            htmlTemplate = htmlTemplate.replace("<!-- CSS Scripts Here -->", cssScripts);
                            htmlTemplate = htmlTemplate.replace("<!-- HTML Scripts Here -->", htmlScripts);
                            htmlTemplate = htmlTemplate.replace("<!-- JavaScript Files Here -->", javaScriptFiles);
                            htmlTemplate = htmlTemplate.replace("<!-- Inline JavaScript Here -->", javaScript);
                            // create the iframe that will hold the result html file
                            var frame = document.createElement("iframe");
                            // clear out the element's old html and append the iframe
                            elm.empty().append(frame);
                            // get a reference to the iframe's document
                            var doc = null;
                            if (frame.contentDocument) {
                                doc = frame.contentDocument;
                            } else if (frame.contentWindow) {
                                doc = frame.contentWindow.document;
                            } else if (frame.document) {
                                doc = frame.document;
                            }
                            // write the html into the iframe so it will load and run
                            doc.open();
                            doc.write(htmlTemplate);
                            doc.close();
                            // set the iframe's styles to expand to fill the column
                            $('iframe').css('height', '100%');
                            $('iframe').css('width', '100%');
                            $('iframe').css('border', '0px;');
                        });
                    } else {
                        elm.empty();
                    }
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
                    return "\rwindow.onload = function() {\rtry {\r"
                        + currentJavascript
                        + "\r} catch (e) { alert('Not working: ' + e) }}";
                };
            }
        };
    }]);
