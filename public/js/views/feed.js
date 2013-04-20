define([
    'jquery',
    'underscore',
    'backbone',

    'text!templates/feed-item.html'

], function($, _, Backbone,  mainTpl){

    return Backbone.View.extend({

        el : $( 'body' ),

        template : _.template(mainTpl),


        initialize: function() {


        },

        render: function() {

            console.log('render');
            this.$el.html(mainTpl);
            return this;
        }

    });

});
