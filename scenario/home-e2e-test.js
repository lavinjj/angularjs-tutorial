'use strict'

describe('The home page', function(){
	
	beforeEach(function(){
		
		return browser().navigateTo('/app/index.html');
		
	});
	
	
	it('display the correct url', function(){
	
		expect(browser().location().path()).toBe('/');
		
	});

    it('should not have a user logged in by default', function() {
        var result = true;
        var style = element('#loggedOutBanner').attr('style');
        if((style.value !== undefined) && (style.value !== '')) {
            expect(result).toBe(false);
        }
        expect(element('#loggedInBanner').attr('style')).toContain('display: none;');
    });

    it('should display the logged in content after a user logs in', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        expect(element('#loggedOutBanner').attr('style')).toContain('display: none;');
        expect(element('#loggedInBanner').attr('style')).toBe('');
    });

});