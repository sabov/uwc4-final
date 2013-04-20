define([
    'jquery',
    'underscore',
    'backbone',

    'collections/feeds',
    'models/feed',

    'text!templates/feed-item.html'

], function($, _, Backbone, FeedCollection, FeedModel,  mainTpl){

    return Backbone.View.extend({

        el : $( 'body' ),

        template : _.template(mainTpl),


        initialize: function() {
            var feeds = new FeedCollection();
            feeds.on('sync', function() {
                console.log('args');
                console.log(arguments);
                console.log(feeds);

            });
            feeds.fetch();


        },

        render: function() {

            console.log('render');
            //this.$el.html(mainTpl);
            return this;
        }

    });

});
