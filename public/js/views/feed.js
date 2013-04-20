define([
    'jquery',
    'underscore',
    'backbone',

    'collections/feeds',
    'models/feed',

    'text!templates/feeds.html'

], function($, _, Backbone, FeedCollection, FeedModel,  mainTpl){

    return Backbone.View.extend({

        el : $( '.feed-list' ),

        template : _.template(mainTpl),

        events: {
            'click a': 'setActive'
        },

        initialize: function() {
            this.feeds = new FeedCollection();
            this.feeds.on('sync', _.bind(this.render, this));
            this.feeds.fetch();
        },

        render: function() {

            this.$el.html(this.template({ 
                feeds: this.feeds.models
            }));
            return this;
        },
        setActive: function(e) {
            var curr = $(e.currentTarget);
            this.$el.find('li').removeClass('active');
            curr.closest('li').addClass('active');

        }

    });

});
