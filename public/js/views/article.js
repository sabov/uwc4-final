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
            this.articles = new ArticlesCollection({
                feedId: id
            });
            this.articles.on('sync', _.bind(this.render, this));
            this.articles.fetch();
        },

        render: function() {
            console.log(this.articles.models);
            console.log(this.$el);


            this.$el.html(this.template({ 
                articles: this.articles.models
            }));
            return this;
        }

    });

});
