'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
Application.Services.
    constant('MONGOLAB_CONFIG',{API_KEY:'50a70bf4e4b039251d28b93b', DB_NAME:'rate-a-stogie'}).
    factory('UserResource',function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('User');
    }).
    factory('CigarResource',function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('Cigar');
    }).
    factory('RatingResource',function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('Rating');
    });
