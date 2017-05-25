// page
'use strict';

define(
    [
        'renaissance'

        , 'node_modules/renaissance-underscore-template/underscoreTemplate'

        , 'node_modules/renaissance-append-html/appendHTML'

        , 'ui/headline'
    ]
    , function(
        renaissance

        , underscoreTemplates

        , appendHTML

        , headline
    ) {
        function init() {
            // adapters
            underscoreTemplates();
            // drinks
            appendHTML();
            // components
            headline.attachTo('#headline');
        }

        return init;
    }
);
