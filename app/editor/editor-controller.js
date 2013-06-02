'use strict';

Application.Controllers.controller('editor-controller', ['$scope', 'tutorial', 'tutorialNotificationChannel', function ($scope, tutorial, tutorialNotificationChannel) {
    $scope.sourceCode = '';
    $scope.editorOptions = {
        lineWrapping: true,
        lineNumbers: true,
        indentUnit: 2,
        readOnly: false,
        smartIndent: true,
        mode: 'javascript'
    };
    $scope.sourceFiles = [];
    $scope.currentFile = null;
    $scope.slide = null;

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
                    if (typeof sourceFile.source === 'Array') {
                        source.source = angular.toJson(sourceFile.source);
                    }
                    else {
                        source.source = sourceFile.source;
                    }
                }
            });
        });

        $scope.currentFile = $scope.sourceFiles[0];
    };

    tutorialNotificationChannel.onSourceFilesLoaded($scope, $scope.onSourceFilesLoadedHandler);

    $scope.switchToSourceFile = function (index) {
        $scope.currentFile = $scope.sourceFiles[index];
    };

}])
;