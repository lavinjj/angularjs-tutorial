basePath = '../';

files = [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'scenario/*-test.js'
];

autoWatch = true;

browsers = ['PhantomJS'];

singleRun = false;

proxies = {
    '/': 'http://localhost:8000/'
};

urlRoot = '/__testacular/';

