// ui headline
'use strict';

define(
    [
        'renaissance'

        , 'text!templates/example.html'
    ]
    , function(
        renaissance
        , exampleTemplate
    ) {
        function headline() {
            var self = this;

            var meta = {
                underscore: renaissance.adapters.underscore
            };
            var template = meta.underscore.tmpl(exampleTemplate);

            this.render = function(e, data) {
                self.appendHTML(template(data), self.node);
            };

            this.after('init', function(component) {
                self.render(null, { title: 'example template' });
            });
        }

        return renaissance.defineComponent(headline);
    }
);
