'use strict';

define(
    [
        'renaissance'
        , 'renaissance-test'
        , 'renaissance-test-html-reporter'

        // specs
        , 'spec/example.spec.js'
    ]
    , function(renaissance, test, htmlReporter) {
          function init() {
            // init test plugin
            test();
            htmlReporter();

            // plugins, adapters, drinks, modules
            //

            // run specs
            // var exampleResult = exampleSpec(renaissance.adapters.example);

            // report
            // renaissance.adapters.htmlReporter.report([exampleResult]);
        }

        return init;
    }
);
