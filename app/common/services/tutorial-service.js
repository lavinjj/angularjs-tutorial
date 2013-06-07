'use strict';

Application.Services.factory('tutorial', ['$http', '$q', 'configuration', 'tutorialNotificationChannel', function ($http, $q, configuration, tutorialNotificationChannel) {
    var tutorial = {
        // data members
        lessons: [],
        slides: [],
        sourceFiles: [],

        lessonsSuccessCallback: function(response) {
            // store the returned array in the dictionary
            tutorial.lessons = response.data;
            // broadcast that the file has been loaded
            tutorialNotificationChannel.lessonsLoaded(tutorial.lessons);
        },

        slidesSuccessCallback: function(response) {
            // store the returned array in the dictionary
            tutorial.slides = response.data;
            // broadcast that the file has been loaded
            tutorialNotificationChannel.slidesLoaded(tutorial.slides);
        },

        markdownSuccessCallback: function(response) {
            // broadcast that the file has been loaded
            tutorialNotificationChannel.markdownLoaded(response.data);
        },

        sourceFileSuccessCallback: function(response) {
            tutorial.sourceFiles.push({name: response.config.url, source: response.data});
        },

        // methods
        getSlides: function(url){
            $http({ method: "GET", url: url, cache: false }).then(tutorial.slidesSuccessCallback);
        },

        // methods
        getLessons: function(){
            if(tutorial.lessons && tutorial.lessons.length){
                tutorialNotificationChannel.lessonsLoaded(tutorial.lessons);
            }
            var url = configuration.urls.LESSONS_URL;
            $http({ method: "GET", url: url, cache: false }).then(tutorial.lessonsSuccessCallback);
        },

        getMarkdown: function(url){
            $http({ method: "GET", url: url, cache: false }).then(tutorial.markdownSuccessCallback);
        },

        getSourceFiles: function(sourceFiles){
            var promises = [];

            angular.forEach(sourceFiles, function(sourceFile){
                promises.push($http({ method: "GET", url: sourceFile, cache: false }).then(tutorial.sourceFileSuccessCallback));
            });

            $q.all(promises).then(function(){
                tutorialNotificationChannel.sourceFilesLoaded(tutorial.sourceFiles);
            });
        }
    };

    return tutorial;
} ]);

