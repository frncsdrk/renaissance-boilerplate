// main
requirejs.config({
    baseUrl: './'
    , paths: {
        'text': 'node_modules/requirejs-text/text'
        , 'renaissance': 'node_modules/renaissance/renaissance'
        , 'templates': 'app/templates'
        
        // , 'app': 'app'
        , 'ui': 'app/scripts/ui'
        , 'data': 'app/scripts/data'
    }
});

require(
    [
        'app/scripts/page'
    ]
    , function(initialize) {
        initialize();
    }
);
