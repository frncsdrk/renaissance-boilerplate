// main
'use strict';

requirejs.config({
    baseUrl: './'
    , paths: {
        'node_modules': '../node_modules'

        , 'renaissance': '../node_modules/renaissance/renaissance'
        , 'renaissance-test': '../node_modules/renaissance-test/renaissance-test'
        , 'renaissance-test-html-reporter': '../node_modules/renaissance-test-html-reporter/renaissance-test-html-reporter'
        , 'renaissance-append-html': '../node_modules/renaissance-append-html/appendHTML'
        , 'mock': 'mock'
        , 'spec': 'spec'
    }
});

require(
    [
        'test-page'
    ]
    , function(initialize) {
        initialize();
    }
);
