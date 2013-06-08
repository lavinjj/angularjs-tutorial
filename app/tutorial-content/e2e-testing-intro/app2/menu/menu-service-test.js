'use strict';

describe('Menu service', function() {
  var items, menu, configuration, scope, $q, $rootScope, $httpBackend

    beforeEach(function(){

        //Define any underlying mock data.
        items = [{
                "id" : "item_1",
                "name" : "item 1",
                "description" : "item 1 details",   
                "timestamp" : "1349539521000"   
            },
            {
                "id" : "item_2",
                "name" : "item 2",
                "description" : "item 2 details",
                "timestamp" : "1349651343000"   
            }
        ]
        
        //We laod all the module dependancies up front.
    	module('application.filters', 'application.services', 'application.controllers', 'application.directives' , 'application.constants');

        //Injecting all of our services in the "beforeEach" section allows us to avoid cluttering out tests. 	
    	inject(function($injector){
          	$q = $injector.get('$q')
          	$rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
            configuration = $injector.get('configuration');
            menu = $injector.get('menu');
    	});

        //The httpBackend is replaced with a mock instance while unit testing. As such, we must manually intercept any http calls 
        //and issue a mock response.
        $httpBackend.whenGET(configuration.ITEMS_URL).respond(items);


    });
    
    afterEach(function(){
        //flush the data from the http call to resolve any pending promises.
        $httpBackend.flush();
    });

    it('should get a list of items', function() {

        //expectations can be nested in promise resolutions.
        menu.get().then(function(data){
            expect(data).toBe(items);
        });
    });  


    it('should get an item by id', function() {

        menu.get('item_1').then(function(data){
            expect(data).toBe(items[0]);
        });

    });  
});
       