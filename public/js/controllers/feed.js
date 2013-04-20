define([

    'jquery',
    'underscore',
    'backbone',

    'views/feed'

], function(

    $,
    _,
    Backbone,

    FeedListView

) {

    return Backbone.Router.extend({

        routes: {
            'feeds' : 'feedList',
            '*a' : 'feedList'
        },

        feedListView         : new FeedListView(),

        initialize : function() {
            console.log('init');
            console.log(this);
        },

        feedList: function() {
            console.log('work');
            console.log(this);
            this.feedListView.render();
        },

        defaultAction: function(actions) {
            this.navigate('feeds', {trigger: true});
        }
    });
});
