define([

    'underscore',
    'backbone',
    'models/feed'

], function(_, Backbone, feedModel){

    return Backbone.Collection.extend({
        model : feedModel,
        url: 'feed'
    });
});
