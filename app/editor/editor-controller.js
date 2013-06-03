'use strict';

Application.Controllers.controller('editor-controller', ['$scope', '$timeout', 'tutorial', 'tutorialNotificationChannel', function ($scope, $timeout, tutorial, tutorialNotificationChannel) {
    $scope.sourceCode = '';
    $scope.sourceFiles = [];
    $scope.currentFile = null;
    $scope.currentFileIndex = 0;
    $scope.slide = null;
    $scope.widgets = [];
    $scope.filesUpdated = false;

    $scope.onSlideChangedHandler = function (slide) {
        $scope.currentFile = '';
        $scope.slide = slide;
        $scope.sourceFiles = slide.code;
        var source = [];
        angular.forEach($scope.sourceFiles, function (sourceFile) {
            source.push(sourceFile.url);
        });

        tutorial.getSourceFiles(source);
    };

    tutorialNotificationChannel.onSlideChanged($scope, $scope.onSlideChangedHandler);

    $scope.onSourceFilesLoadedHandler = function (sourceFiles) {
        angular.forEach(sourceFiles, function (sourceFile) {
            angular.forEach($scope.sourceFiles, function (source) {
                if (sourceFile.name === source.url) {
                    if (Object.prototype.toString.call( sourceFile.source ) === '[object Array]') {
                        source.source = angular.toJson(sourceFile.source);
                    }
                    else {
                        source.source = sourceFile.source;
                    }
                }
            });
        });

        $scope.filesUpdated = true;
    };

    tutorialNotificationChannel.onSourceFilesLoaded($scope, $scope.onSourceFilesLoadedHandler);

    $scope.getOptionsForFileType = function(mode){
        var result = $scope.javascriptOptions;

        if(mode === 'html'){
            result = $scope.htmlOptions;
        }
        if (mode === 'json'){
            result = $scope.jsonOptions;
        }

        return result;
    }

    $scope.javascriptOptions = {
        lineWrapping: true,
        lineNumbers: true,
        indentUnit: 2,
        readOnly: false,
        smartIndent: true,
        onChange: $scope.reParseInput,
        mode: 'javascript',
        gutters: ["CodeMirror-lint-markers"],
        lintWith: CodeMirror.javascriptValidator
    };

    $scope.jsonOptions = {
        lineWrapping: true,
        lineNumbers: true,
        indentUnit: 2,
        readOnly: false,
        smartIndent: true,
        mode: 'javascript',
        gutters: ["CodeMirror-lint-markers"],
        lintWith: CodeMirror.jsonValidator
    };

    $scope.htmlOptions = {
        lineWrapping: true,
        lineNumbers: true,
        indentUnit: 2,
        readOnly: false,
        smartIndent: true,
        mode: 'html'
    };

    $scope.runCode = function() {
        tutorialNotificationChannel.runExample($scope.sourceFiles);
    };

}])
;