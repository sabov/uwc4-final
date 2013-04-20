define([
    'jquery',
    'underscore',
    'backbone',

    'collections/articles',

    'text!templates/articles.html'

], function($, _, Backbone, ArticlesCollection,  mainTpl){

    return Backbone.View.extend({

        el : $( '.articles' ),

        template : _.template(mainTpl),


        initialize: function() {
            var id = this.options.id;
            console.log('id')
            console.log(id)
            this.articles = new ArticlesCollection({
                feedId: id
            });
            this.articles.on('sync', _.bind(this.render, this));
            this.articles.fetch();
        },

        render: function() {

            this.$el.html(this.template({ 
                feedItems: this.feedsItems.models
            }));
            return this;
        }

    });

});
