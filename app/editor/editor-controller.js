'use strict';

Application.Controllers.controller('editor-controller', ['$scope', '$timeout', 'tutorial', 'tutorialNotificationChannel', function ($scope, $timeout, tutorial, tutorialNotificationChannel) {
    $scope.sourceFiles = [];
    $scope.currentIndex = 0;
    $scope.currentSource = '';
    $scope.currentFile = null;
    $scope.currentFileIndex = 0;
    $scope.slide = null;
    $scope.widgets = [];
    $scope.filesUpdated = false;

    $scope.onSlideChangedHandler = function (slide) {
        $scope.setOptionsForFileType('text');
        $scope.currentFile = '';
        $scope.slide = slide;
        $scope.sourceFiles = slide.code;
        var source = [];
        angular.forEach($scope.sourceFiles, function (sourceFile) {
            source.push(sourceFile.url);
        });

        if (source.length) {
            tutorial.getSourceFiles(source);
        }
    };

    tutorialNotificationChannel.onSlideChanged($scope, $scope.onSlideChangedHandler);

    $scope.onSourceFilesLoadedHandler = function (sourceFiles) {
        if (sourceFiles.length) {
            angular.forEach(sourceFiles, function (sourceFile) {
                angular.forEach($scope.sourceFiles, function (source) {
                    if (sourceFile.name === source.url) {
                        if (Object.prototype.toString.call(sourceFile.source) === '[object Array]') {
                            source.source = angular.toJson(sourceFile.source, true);
                        }
                        else {
                            source.source = sourceFile.source;
                        }
                    }
                });
            });

            $scope.currentFile = $scope.sourceFiles[0];
            $scope.currentIndex = $scope.currentFile.name;
            $scope.setOptionsForFileType($scope.currentFile.mode);
            $scope.filesUpdated = !$scope.filesUpdated;
        }
    };

    tutorialNotificationChannel.onSourceFilesLoaded($scope, $scope.onSourceFilesLoadedHandler);

    $scope.onTabSelected = function (index) {
        $scope.currentFile = $scope.sourceFiles[index];
        $scope.setOptionsForFileType($scope.currentFile.mode);

        $scope.filesUpdated = !$scope.filesUpdated;
    };

    $scope.setOptionsForFileType = function (mode) {
        if ($scope.codeMirror) {

            $scope.codeMirror.setOption("mode", mode);

            if (mode === 'text') {
                $scope.codeMirror.setOption("readOnly", false);
                $scope.codeMirror.setOption("gutters", []);
                $scope.codeMirror.setOption("lintWith", null);
            }
            if (mode === 'text/html') {
                $scope.codeMirror.setOption("readOnly", false);
                $scope.codeMirror.setOption("gutters", []);
                $scope.codeMirror.setOption("lintWith", null);
            }
            if (mode === 'hint-text/html') {
                $scope.codeMirror.setOption("readOnly", "nocursor");
                $scope.codeMirror.setOption("gutters", []);
                $scope.codeMirror.setOption("lintWith", null);
            }
            if (mode === 'javascript') {
                $scope.codeMirror.setOption("readOnly", false);
                $scope.codeMirror.setOption("gutters", ["CodeMirror-lint-markers"]);
                $scope.codeMirror.setOption("lintWith", CodeMirror.javascriptValidator);
            }
            if (mode === 'hint-javascript') {
                $scope.codeMirror.setOption("readOnly", "nocursor");
                $scope.codeMirror.setOption("gutters", ["CodeMirror-lint-markers"]);
                $scope.codeMirror.setOption("lintWith", CodeMirror.javascriptValidator);
            }
            if (mode === 'json') {
                $scope.codeMirror.setOption("readOnly", false);
                $scope.codeMirror.setOption("gutters", ["CodeMirror-lint-markers"]);
                $scope.codeMirror.setOption("lintWith", CodeMirror.jsonValidator);
            }
            if (mode === 'hint-json') {
                $scope.codeMirror.setOption("readOnly", "nocursor");
                $scope.codeMirror.setOption("gutters", ["CodeMirror-lint-markers"]);
                $scope.codeMirror.setOption("lintWith", CodeMirror.jsonValidator);
            }
        }
    };

    $scope.htmlOptions = {
        lineWrapping: true,
        lineNumbers: true,
        indentUnit: 2,
        readOnly: false,
        smartIndent: true,
        mode: "htmlmixed",
        autoCloseTags: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    };

    $scope.onRunExampleHandler = function(){
        var runPackage = angular.copy($scope.slide);
        runPackage.sourceFiles = $scope.sourceFiles;
        tutorialNotificationChannel.slideSaved(runPackage);
    };

    tutorialNotificationChannel.onRunExample($scope, $scope.onRunExampleHandler);

}])
;