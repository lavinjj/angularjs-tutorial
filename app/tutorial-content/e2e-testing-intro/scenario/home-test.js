'use strict'

describe('The home page', function(){
	
	beforeEach(function(){
		
		return browser().navigateTo('/index.html');
		
	});
	
	
	it('display the correct url', function(){
	
		expect(browser().location().path()).toBe('');
		
	});
	
});