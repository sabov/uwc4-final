define([
    'jquery',
    'underscore',
    'backbone',

    'collections/articles',
    'models/feed',

    'text!templates/articles.html'

], function($, _, Backbone, ArticlesCollection,  FeedModel, mainTpl){

    return Backbone.View.extend({

        el : $( '.articles' ),

        events: {
            'click .refresh-article' : 'refresh'
        },

        template : _.template(mainTpl),

        initialize: function() {
            var id = this.options.id;
            this.articles = new ArticlesCollection({
                feedId: id
            });
            this.articles.on('sync', _.bind(this.render, this));
            this.articles.fetch();
        },

        render: function() {

            this.$el.html(this.template({ 
                articles: this.articles.models
            }));
            return this;
        },

        refresh: function() {
            this.articles.fetch();
        }
    });

});
