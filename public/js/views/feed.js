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
            'click .save-btn' : 'addFeed'
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
            var url  = this.$el.find('.feed-url').val();
            var r = /^(ftp|http|https):\/\/[^ "]+$/;
            if(r.test(url)) {
                var feed = new FeedModel({
                    url: url
                });
                feed.save();
                console.log('olol');
                this.$el.find('.modal').modal('hide');
            } else {
                this.$el.find('.control-group').addClass('error');
            }
        }

    });

});
