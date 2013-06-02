'use strict'

describe('localization service', function(){

    beforeEach(function(){

        return browser().navigateTo('/app/index.html');

    });


    it('should change to english language when english button clicked', function(){
        element('#buttonEnglish').click();
        expect(element('.hero-unit h1').text()).toContain('Welcome to Brew Everywhere!');
    });

    it('should change to piglatin language when english button clicked', function(){
        element('#buttonPiglatin').click();
        expect(element('.hero-unit h1').text()).toContain('elcomeWay otay rewBay Everywhereay!');
    });

});