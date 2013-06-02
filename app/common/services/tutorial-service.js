'use strict';

Application.Services.factory('tutorial', ['$http', '$q', 'configuration', 'tutorialNotificationChannel', function ($http, $q, configuration, tutorialNotificationChannel) {
    var tutorial = {
        // data members
        slides: [],
        sourceFiles: [],

        slidesSuccessCallback: function(data) {
            // store the returned array in the dictionary
            tutorial.slides = data.data;
            // broadcast that the file has been loaded
            tutorialNotificationChannel.slidesLoaded(tutorial.slides);
        },

        markdownSuccessCallback: function(data) {
            // broadcast that the file has been loaded
            tutorialNotificationChannel.markdownLoaded(data.data);
        },

        sourceFileSuccessCallback: function(data) {
            tutorial.sourceFiles.push({name: data.config.url, source: data.data});
        },

        // methods
        getSlides: function(){
            var url = configuration.urls.SLIDES_URL;
            $http({ method: "GET", url: url, cache: false }).then(tutorial.slidesSuccessCallback);
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

