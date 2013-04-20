define([

    'jquery',
    'underscore',
    'backbone',

    'views/feed',
    'views/article'

], function(

    $,
    _,
    Backbone,

    FeedView,
    ArticleView

) {

    return Backbone.Router.extend({

        routes: {
            'feeds' : 'feedList',
            'feeds/:id' : 'articleList',
            '*a' : 'feedList'
        },

        feedView      : new FeedView(),

        initialize : function() {
        },

        feedList: function() {
            this.feedListView.render();
        },
        articleList: function(id) {
            console.log('woeee');
            console.log(this);
            console.log(arguments);

            var articleList = new ArticleView({
                id: id
            });
        },

        defaultAction: function(actions) {
            this.navigate('feeds', {trigger: true});
        }
    });
});
