'use strict'

describe('The home page', function(){
	
	beforeEach(function(){
		
		return browser().navigateTo('tutorial-content/e2e-testing-intro/app2/index.html');
		
	});
	
	
	it('display the correct url', function(){
	
		expect(browser().location().path()).toBe('');
		
	});
	
});