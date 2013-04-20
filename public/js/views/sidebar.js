define([
    'jquery',
    'underscore',
    'backbone',
    'models/env',

    'text!templates/sidebar.html'

], function($, _, Backbone, env, sidebarTpl){

    return Backbone.View.extend({

        template : _.template(sidebarTpl),

        events : {
            'click .nav-item' : 'navClick'
        },

        initialize : function() {
            this.model.bind('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template({ navigation: this.model.toJSON() }));
            this.activeByLocation();
            return this;
        },

        activeByLocation : function() {
            var hash = location.hash;
            var link = this.$el.find('a[href="' + hash + '"]');
            var curr = link.closest('.nav-item');
            this.setActiveItem(curr);
        },

        navClick : function(e) {
            var curr = $(e.currentTarget);
            this.setActiveItem(curr);
        },

        setActiveItem : function(item) {
            this.$el.find('.nav-item').removeClass('active');
            $(item).addClass('active');
        }

    });
});
