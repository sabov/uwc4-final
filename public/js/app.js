
(function() {
    jQuery(function() {
        jQuery('.nav .dropdown-menu').click(function(e) {
            e.stopPropagation();
        });
    });
})();

jQuery(function () {
    var _asignValidator = function () {
        var loginForm    = $('form.login'),
            registerForm = $('form.register'),
            productForm  = $('form.product-form'),

            params = {
                rules: {
                    username: {
                        required: true,
                        minlength: 3
                    },
                    password: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {

                }
            };
        loginForm.validate(params);
        registerForm.validate(params);
        productForm.validate();
    };
    _asignValidator();

});

define([
    'jquery',
    'underscore',
    'backbone',

    'less',

    'controllers/feed'

], function(

    $,
    _,
    Backbone,
    Less,

    FeedConroller
    ) {

    console.log(arguments);

    //*****************************
    //development mode for less
    less.env = 'development';
    less.watch();
    //*****************************

    var initialize = function() {
        console.log('olo');
        new FeedConroller();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
