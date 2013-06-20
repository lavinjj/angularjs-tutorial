angular.module('myApp', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'personlist-partial.html'}).
            when('/person/:index', {templateUrl: 'personedit-partial.html'}).
            otherwise({templateUrl: 'personlist-partial.html'});

    }]);