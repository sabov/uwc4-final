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
            'click a': 'setActive',
            'click .save-btn' : 'addFeed',
            'click .refresh' : 'refresh'
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

        },

        addFeed: function() {
            var url   = this.$el.find('.feed-url').val();
            var r = /^(ftp|http|https):\/\/[^ "]+$/;
            if(r.test(url)) {
                var feed = new FeedModel({
                    url: url,
                });
                feed.save();
                this.$el.find('.modal').modal('hide');
                this.feeds.fetch();
            } else {
                this.$el.find('.control-group').addClass('error');
            }
        },

        refresh: function() {
            this.feeds.fetch();
            $('.refresh-article').click();
        }


    });

});
