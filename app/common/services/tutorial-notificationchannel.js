Application.Services
    .factory('tutorialNotificationChannel', ['$rootScope', 'configuration', function ($rootScope, configuration) {
        // private notification messages
        var _LESSONS_LOADED_ = configuration.messages.LESSONS_LOADED;
        var _SLIDES_LOADED_ = configuration.messages.SLIDES_LOADED;
        var _MARKDOWN_LOADED_ = configuration.messages.MARKDOWN_LOADED;
        var _SOURCE_FILES_LOADED_ = configuration.messages.SOURCE_FILES_LOADED;
        var _SLIDE_CHANGED_ = configuration.messages.SLIDE_CHANGED;
        var _RUN_EXAMPLE_ = configuration.messages.RUN_EXAMPLE;

        // publish slide loaded notification
        var lessonsLoaded = function (lessons) {
            $rootScope.$broadcast(_LESSONS_LOADED_, {lessons: lessons});
        };
        //subscribe to slide loaded notification
        var onLessonsLoaded = function ($scope, handler) {
            $scope.$on(_LESSONS_LOADED_, function (event, args) {
                handler(args['lessons']);
            });
        };
        // publish slide loaded notification
        var slidesLoaded = function (slides) {
            $rootScope.$broadcast(_SLIDES_LOADED_, {slides: slides});
        };
        //subscribe to slide loaded notification
        var onSlidesLoaded = function ($scope, handler) {
            $scope.$on(_SLIDES_LOADED_, function (event, args) {
                handler(args['slides']);
            });
        };
        // publish markdown loaded notification
        var markdownLoaded = function (markdown) {
            $rootScope.$broadcast(_MARKDOWN_LOADED_, {markdown: markdown});
        };
        //subscribe to markdown loaded notification
        var onMarkdownLoaded = function ($scope, handler) {
            $scope.$on(_MARKDOWN_LOADED_, function (event, args) {
                handler(args['markdown']);
            });
        };
        // publish source files loaded notification
        var sourceFilesLoaded = function (sourceFiles) {
            $rootScope.$broadcast(_SOURCE_FILES_LOADED_, {sourceFiles: sourceFiles});
        };
        //subscribe to source files loaded notification
        var onSourceFilesLoaded = function ($scope, handler) {
            $scope.$on(_SOURCE_FILES_LOADED_, function (event, args) {
                handler(args['sourceFiles']);
            });
        };
        // publish slide change notification
        var slideChanged = function (slide) {
            $rootScope.$broadcast(_SLIDE_CHANGED_, {slide: slide});
        };
        //subscribe to slide change notification
        var onSlideChanged = function ($scope, handler) {
            $scope.$on(_SLIDE_CHANGED_, function (event, args) {
                handler(args['slide']);
            });
        };
        // publish request to run example code
        var runExample = function (sourceFiles) {
            $rootScope.$broadcast(_RUN_EXAMPLE_, {sourceFiles: sourceFiles});
        };
        // subscribe to run example code notification
        var onRunExample = function ($scope, handler) {
            $scope.$on(_RUN_EXAMPLE_, function (event, args) {
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
            onRunExample: onRunExample
        };
    }])
