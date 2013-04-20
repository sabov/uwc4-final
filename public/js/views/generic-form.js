define([

    'jquery',
    'underscore',
    'backbone',

], function($, _, Backbone){

    return Backbone.View.extend({

        formDataBind : function(htmlForm, model) {
            var form   = $(htmlForm);
            var inputs = form.find('input');
            inputs.bind('blur', function() {
                //var res = model.set('Name', this.value);
                //var errorMessage = model.preValidate('Name', '');
                //debug(model.get('Name'));
            });
        }

    });
});
