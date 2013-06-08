'use strict';

describe('Menu item directive', function() {
  var element, $q, $rootScope, $compile, $httpBackend

    beforeEach(function(){

        //We laod all the module dependancies up front.
    	module('application.filters', 'application.services', 'application.controllers', 'application.directives' , 'application.constants');

        //Injecting all of our services in the "beforeEach" section allows us to avoid cluttering out tests. 	
    	inject(function($injector){
          	$q = $injector.get('$q')
          	$rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            $httpBackend = $injector.get('$httpBackend');
    	});

    //Directives fetch their templates with $http. Since unit tests use the mock $httpBackend,
    //we must mock a template response. Thie need to dublicate the template code would be eliminated if
    //the unit test httpBackend mock implimented the ".andPassThrough" method as the e2e version does.
    $httpBackend.whenGET('menu/menu-item-template.html').respond('<a href="#/{{id}}">{{name}}</a>');

    //Applying the rootScope digests and refreshes the ui so our directive renders. 
    $rootScope.$apply(function(){
        //We compile a directive into an angular element so we canmanipulate it programatically.
        element = $compile('<menu-item name="\'testName\'" id="\'testId\'"/>')($rootScope);
    });

    //Flushing $httpBackend pushes the mock template to the directive, allowing it to render.
    $httpBackend.flush();


    });

    it('should display a name and id', function() {

        //Once an element has been rendered you can perform any of the "angular.element" operations.
        expect(element.html()).toBe("testName");
        expect(element.attr('href')).toBe("#/testId");

    });  
});
       