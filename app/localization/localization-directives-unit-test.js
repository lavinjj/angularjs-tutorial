describe('i18n directive', function() {
    var elm;
    var multi;
    var scope;
    var localize;

    beforeEach(function () {

        localize = {
            getLocalizedString: function (value) {
                if (value === 'TEST_ITEM1') {
                    return 'This is a test response.';
                } else if (value === 'TEST_ITEM2') {
                    return 'This is a multi replace test response {0} {1}';
                } else {
                    return '';
                }
            }
        };

        module('tutorial.services', function ($provide) {
            $provide.value('localize', localize);
        });
    });

    // load the localization code
    beforeEach(module('tutorial.directives'));

    beforeEach(inject(function ($rootScope, $compile) {
        // we might move this tpl into an html file as well...
        elm = angular.element('<div data-i18n="TEST_ITEM1"></div>');

        multi = angular.element('<div data-i18n="TEST_ITEM2|ABC|123"></div>');

        scope = $rootScope;
        $compile(elm)(scope);
        $compile(multi)(scope);
        scope.$digest();
    }));

    it('should set inner text', function () {
        var titles = elm.text();

        expect(titles).toBe('This is a test response.');
    });

    it('should replace placeholders with values', function () {
        var titles = multi.text();

        expect(titles).toBe('This is a multi replace test response ABC 123');
    });
});

describe('i18nPassThrough directive', function() {
    var elm;
    var multi;
    var pass;
    var scope;
    var localize;

    beforeEach(function () {

        localize = {
            getLocalizedString: function (value) {
                if (value === 'TEST_ITEM1') {
                    return 'This is a test response.';
                } else if (value === 'TEST_ITEM2') {
                    return 'This is a multi replace test response {0} {1}';
                } else {
                    return '';
                }
            }
        };

        module('tutorial.services', function ($provide) {
            $provide.value('localize', localize);
        });
    });

    // load the localization code
    beforeEach(module('tutorial.directives'));

    beforeEach(inject(function ($rootScope, $compile) {
        // we might move this tpl into an html file as well...
        elm = angular.element('<div data-i18n-passthrough="TEST_ITEM1"></div>');

        multi = angular.element('<div data-i18n-passthrough="TEST_ITEM2|ABC|123"></div>');

        pass = angular.element('<div data-i18n-passthrough="TEST_ITEM3|ABC|123"></div>');

        scope = $rootScope;
        $compile(elm)(scope);
        $compile(multi)(scope);
        $compile(pass)(scope);
        scope.$digest();
    }));

    it('should set inner text', function () {
        var titles = elm.text();

        expect(titles).toBe('This is a test response.');
    });

    it('should replace placeholders with values', function () {
        var titles = multi.text();

        expect(titles).toBe('This is a multi replace test response ABC 123');
    });

    it('should pass through missing text keys', function () {
        var titles = pass.text();

        expect(titles).toBe('TEST_ITEM3|ABC|123');
    });
});

describe('i18nAttr directive', function() {
    var elm;
    var multi;
    var scope;
    var localize;

    beforeEach(function () {

        localize = {
            getLocalizedString: function (value) {
                if (value === 'TEST_ITEM1') {
                    return 'This is a test response.';
                } else if (value === 'TEST_ITEM2') {
                    return 'This is a multi replace test response {0} {1}';
                } else {
                    return '';
                }
            }
        };

        module('tutorial.services', function ($provide) {
            $provide.value('localize', localize);
        });
    });

    // load the localization code
    beforeEach(module('tutorial.directives'));

    beforeEach(inject(function ($rootScope, $compile) {
        // we might move this tpl into an html file as well...
        elm = angular.element('<div data-i18n-attr="TEST_ITEM1|title" title="Not the value"></div>');

        multi = angular.element('<div data-i18n-attr="TEST_ITEM2|title|ABC|123" title="Not the value"></div>');

        scope = $rootScope;
        $compile(elm)(scope);
        $compile(multi)(scope);
        scope.$digest();
    }));

    it('should set inner text', function () {
        var titles = elm.attr('title').toString();

        expect(titles).toBe('This is a test response.');
    });

    it('should replace placeholders with values', function () {
        var titles = multi.attr('title').toString();

        expect(titles).toBe('This is a multi replace test response ABC 123');
    });
});

