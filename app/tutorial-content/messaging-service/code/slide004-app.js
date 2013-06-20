angular.module('myApp', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'personlist-partial.html'}).
            // add a route to switch to the personedit-controller and pass the index of the person to edit.
            otherwise({templateUrl: 'personlist-partial.html'});

    }]);