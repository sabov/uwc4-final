define([

    'underscore',
    'backbone'

], function(_, Backbone){

    return Backbone.Collection.extend({
        urlRoot : 'article',
        feedId  : '',
        url     : function() {
            console.log('model');
            console.log(this);
            return this.urlRoot + '?feed_id=' + this.feedId;
        },
        initialize: function(data) {
            this.feedId = data.feedId;
        }
    });
});
