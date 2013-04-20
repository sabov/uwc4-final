require.config({
    paths: {
        /*    Libraries    */

        bootstrapTree: '/js/lib/bootstrap-tree',

        jquery     : '/js/components/jquery/jquery',
        validator  : '/js/components/jquery.validation/jquery.validate',
        cookie     : '/js/components/jquery.cookie/jquery.cookie',
        less       : '/js/components/less.js/dist/less-1.3.3.min',
        underscore : '/js/components/underscore/underscore',
        backbone   : '/js/components/backbone/backbone',
        text       : '/js/components/requirejs-text/text',
        bootstrap  : '/js/components/bootstrap.css/js/bootstrap',
        //model_binder : '/js/vendor/Backbone.ModelBinder',
        //validation : '/js/vendor/backbone-validation-amd',


        /*    Application    */
        app    : '/js/app',

        templates: '/js/templates',
        views: '/js/views'
    },

    shim: {
        bootstrap :  {
            deps : ['jquery']
        },
        bootstrapTree: {
            deps : ['bootstrap']
        },
        app : {
            deps : [
                'bootstrap',
                'bootstrapTree',
                'validator',
                'less',
                'cookie'
            ]
        },
        validator : {
            deps : ['jquery']
        },
        cookie : {
            deps : ['jquery']
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        common : {
            deps : ['backbone']
        },
        jquery_cookie: {
            deps: ['jquery']
        }

    },
    urlArgs: "bust=" +  (new Date()).getTime()
});
require(['app'], function(app) {
    app.initialize();
});
