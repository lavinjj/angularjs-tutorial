Application.Directives.
    directive('resultsIframe', ['$window', '$document', function ($window, $document) {
        return {
            restrict: 'A',
            requires: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.resultsIframe, function (newValue, oldValue) {
                        generateHTMLOutput(newValue);
                });

                var generateHTMLOutput = function (sourceFiles) {

                    var htmlStart = '<!DOCTYPE html>'
                        + '<html><head>'
                        + '<link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">'
                        + '<style type="text/css">'
                        + 'body {'
                        + 'padding-top: 60px;'
                        + 'padding-bottom: 40px;'
                        + '}'
                        + '</style>'
                        + '<link href="lib/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">'
                        + '</head><body id="ng-app">';
//                        + '<div ng-include src="template/home-partial.html" ></div>';

                    var htmlEnd = "</body></html>";

                    var scripts = buildScript("lib/jquery/jquery-1.10.0.js")
                        + buildScript("lib/bootstrap/js/bootstrap.js")
                        + buildScript("lib/angular/angular.js")
                        + buildScript("lib/angularjs-mongolab-promise/mongolabResourceHttp.js");
//                        + buildScript("slide-content/code/app.js");

                    var bootstrap = '';
                    var currentHtml = '';

                    angular.forEach(sourceFiles, function (sourceFile) {
                        if (sourceFile.mode === 'javascript') {
                            bootstrap = bootstrap + buildScript("", buildOnLoad(sourceFile.source));
                        }
                        if (sourceFile.mode === 'json') {
                            bootstrap = bootstrap + buildScript("", buildOnLoad(sourceFile.source));
                        }
                        if (sourceFile.mode === 'text/html') {
                            currentHtml = currentHtml + buildHtmlTemplate(sourceFile);
                        }
                    });

                    var html = htmlStart + currentHtml + scripts + bootstrap + htmlEnd;


                    var frame = document.createElement("iframe");
                    elm.empty().append(frame);

                    var doc = null;
                    if (frame.contentDocument) {
                        doc = frame.contentDocument;
                    } else if (frame.contentWindow) {
                        doc = frame.contentWindow.document;
                    } else if (frame.document) {
                        doc = frame.document;
                    }


                    doc.open();
                    doc.write(html);
                    doc.close();

                };

                var buildScript = function (src, content) {
                    content = content || "";
                    var scriptTag = "<script ";
                    var attributes = src ? "src='" + src + "'" : "";
                    var scriptEndTag = "</script>";
                    return scriptTag + attributes + ">" + content + scriptEndTag + "\r";
                };

                var buildOnLoad = function (currentJavascript) {
                    return "\rwindow.onload = function() {\rtry { "
                        + currentJavascript
                        + "\r} catch (e) { alert('Not working: ' + e) }}";
                };

                var buildHtmlTemplate = function (sourceFile) {
                    var content = sourceFile.source || "";
                    var scriptTag = '<script type="text/ng-template" ';
                    var attributes = 'id="template/' + sourceFile.name + '" ';
                    var scriptEndTag = "</script>";
                    return content + "\r";
                    //return scriptTag + attributes + ">" + content + scriptEndTag + "\r";
                };
            }
        };
    }]);
