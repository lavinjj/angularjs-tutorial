basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'app/lib/angular/angular.js',
    'app/lib/angular/angular-mocks.js',

    'app/lib/angularjs-mongolab-promise/*.js',
    'app/lib/sha/*.js',

    'app/application/*.js',
    'app/*/*.js',
    'app/*/*-constants.js',
    'app/*/*-service.js',
    'app/*/*-controller.js',
    'app/*/*-filter.js',
    'app/*/*-directive.js',
    'app/*/*unit-test.js'

];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
    outputFile:'test_out/unit.xml',
    suite:'unit'
};
