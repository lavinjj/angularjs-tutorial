'use strict'

describe('The menu', function(){

    beforeEach(function(){

        return browser().navigateTo('/app/index.html');

    });

    it('should navigate to the home page', function() {
        element('#homeLink').click();
        expect(browser().location().path()).toBe('/XX');
    });

    it('should navigate to the about page', function() {
        element('#aboutLink').click();
        expect(browser().location().path()).toBe('/about');
    });

    it('should navigate to the contact page', function() {
        element('#contactLink').click();
        expect(browser().location().path()).toBe('/contact');
    });

    it('should navigate to the cigars page', function() {
        element('#adjunctsLink').click();
        expect(browser().location().path()).toBe('/cigars');
    });

    it('should navigate to the equipment page', function() {
        element('#equipmentLink').click();
        expect(browser().location().path()).toBe('/equipment');
    });

    it('should navigate to the fermentables page', function() {
        element('#fermentablesLink').click();
        expect(browser().location().path()).toBe('/fermentables');
    });

    it('should navigate to the hops page', function() {
        element('#hopsLink').click();
        expect(browser().location().path()).toBe('/hops');
    });

    it('should navigate to the mash profiles page', function() {
        element('#mashLink').click();
        expect(browser().location().path()).toBe('/mashprofiles');
    });

    it('should navigate to the styles page', function() {
        element('#stylesLink').click();
        expect(browser().location().path()).toBe('/styles');
    });

    it('should navigate to the water page', function() {
        element('#waterLink').click();
        expect(browser().location().path()).toBe('/waterprofiles');
    });

    it('should navigate to the yeast page', function() {
        element('#yeastLink').click();
        expect(browser().location().path()).toBe('/yeast');
    });

    it('should not show the user menu by default', function() {
        expect(element('#brewerMenu').attr('style')).toContain('display: none;');
    });

    it('should display the user menu after a user logs in', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        expect(element('#brewerMenu').attr('style')).toBe('');
    });

    it('should navigate to the my profile page', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        element('#myProfileLink').click();
        expect(browser().location().path()).toBe('/myprofile');
    });

    it('should navigate to the my recipe page', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        element('#myRecipesLink').click();
        expect(browser().location().path()).toBe('/myrecipes');
    });

    it('should navigate to the my calendar page', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        element('#myCalendarLink').click();
        expect(browser().location().path()).toBe('/mycalendar');
    });

    it('should navigate to the my brew log page', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        element('#myLogLink').click();
        expect(browser().location().path()).toBe('/mybrewlog');
    });

    it('should navigate to the my equipment page', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        element('#myEquipementLink').click();
        expect(browser().location().path()).toBe('/myequipment');
    });

    it('should navigate to the my inventory page', function() {
        input('login.userName').enter('lavinjj');
        input('login.password').enter('f00sba11');
        element('#loginButton').click();
        element('#myInventoryLink').click();
        expect(browser().location().path()).toBe('/myinventory');
    });

});