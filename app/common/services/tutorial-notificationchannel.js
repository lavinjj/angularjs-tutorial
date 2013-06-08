Application.Services
    .factory('tutorialNotificationChannel', ['$rootScope', 'configuration', function ($rootScope, configuration) {
        // publish slide loaded notification
        var lessonsLoaded = function (lessons) {
            $rootScope.$broadcast(configuration.messages.LESSONS_LOADED, {lessons: lessons});
        };
        //subscribe to slide loaded notification
        var onLessonsLoaded = function ($scope, handler) {
            $scope.$on(configuration.messages.LESSONS_LOADED, function (event, args) {
                handler(args['lessons']);
            });
        };
        // publish slide loaded notification
        var slidesLoaded = function (slides) {
            $rootScope.$broadcast(configuration.messages.SLIDES_LOADED, {slides: slides});
        };
        //subscribe to slide loaded notification
        var onSlidesLoaded = function ($scope, handler) {
            $scope.$on(configuration.messages.SLIDES_LOADED, function (event, args) {
                handler(args['slides']);
            });
        };
        // publish markdown loaded notification
        var markdownLoaded = function (markdown) {
            $rootScope.$broadcast(configuration.messages.MARKDOWN_LOADED, {markdown: markdown});
        };
        //subscribe to markdown loaded notification
        var onMarkdownLoaded = function ($scope, handler) {
            $scope.$on(configuration.messages.MARKDOWN_LOADED, function (event, args) {
                handler(args['markdown']);
            });
        };
        // publish source files loaded notification
        var sourceFilesLoaded = function (sourceFiles) {
            $rootScope.$broadcast(configuration.messages.SOURCE_FILES_LOADED, {sourceFiles: sourceFiles});
        };
        //subscribe to source files loaded notification
        var onSourceFilesLoaded = function ($scope, handler) {
            $scope.$on(configuration.messages.SOURCE_FILES_LOADED, function (event, args) {
                handler(args['sourceFiles']);
            });
        };
        // publish slide change notification
        var slideChanged = function (slide) {
            $rootScope.$broadcast(configuration.messages.SLIDE_CHANGED, {slide: slide});
        };
        //subscribe to slide change notification
        var onSlideChanged = function ($scope, handler) {
            $scope.$on(configuration.messages.SLIDE_CHANGED, function (event, args) {
                handler(args['slide']);
            });
        };
        // publish request to run example code
        var runExample = function () {
            $rootScope.$broadcast(configuration.messages.RUN_EXAMPLE);
        };
        // subscribe to run example code notification
        var onRunExample = function ($scope, handler) {
            $scope.$on(configuration.messages.RUN_EXAMPLE, function () {
                handler();
            })
        };
        // publish request to run example code
        var slideSaved = function (sourceFiles) {
            $rootScope.$broadcast(configuration.messages.SLIDE_SAVED, {sourceFiles: sourceFiles});
        };
        // subscribe to run example code notification
        var onSlideSaved = function ($scope, handler) {
            $scope.$on(configuration.messages.SLIDE_SAVED, function (event, args) {
                handler(args['sourceFiles']);
            })
        };
        // return the publicly accessible methods
        return {
            lessonsLoaded: lessonsLoaded,
            onLessonsLoaded: onLessonsLoaded,
            slidesLoaded: slidesLoaded,
            onSlidesLoaded: onSlidesLoaded,
            markdownLoaded: markdownLoaded,
            onMarkdownLoaded: onMarkdownLoaded,
            sourceFilesLoaded: sourceFilesLoaded,
            onSourceFilesLoaded: onSourceFilesLoaded,
            slideChanged: slideChanged,
            onSlideChanged: onSlideChanged,
            runExample: runExample,
            onRunExample: onRunExample,
            slideSaved: slideSaved,
            onSlideSaved: onSlideSaved
        };
    }])
