'use strict';

describe('To date string filter', function() {
  var filter;

    beforeEach(function(){
        
        //We laod all the module dependancies up front.
    	module('application.filters', 'application.services', 'application.controllers', 'application.directives' , 'application.constants');

        //Injecting all of our dependancies in the "beforeEach" section allows us to avoid cluttering out tests. 	
    	inject(function($filter){
            filter = $filter('toDateString');
    	});

    });

    it('should load a list of items', function() {

        expect(filter('1349539521000')).toBe('10/06/2012');

    });  
});
       