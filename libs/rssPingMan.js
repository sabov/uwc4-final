module.exports = (function(){
	var FeedParser = require('feedparser')
		, modelFeed = require('../models/model_feed')
		, request = require('request')
		, fs = require('fs');


	var updateFeeds = function () {
		modelFeed.getAllFeed({}, function (result) {
			console.log (result)
			result.data.forEach(function (feed) {
				updateFeed(feed);
			})
		});
	}

	var getAllFeeds = function(callback) {
		feed.getAllFeed({}, function (result) {
			if (result.success) {
				callback(result.data)
			}
		})
	}

	var getUserFeeds = function (callback) {

	}

	var updateFeed = function (feed, callback) {
		callback = callback || function(){}
		request(feed.url)
		  .pipe(new FeedParser())
		  .on('error', function (error) {
		    // console.error(error);
		  })
		  .on('meta', function (meta) {
		    // console.log('===== %s =====', meta.title);
		  })
		  .on('article', function(article){
		  	modelFeed.createArticle(feed, function (data) {
		  		console.log(data);
		  	})
		  })
		  .on('end', function () {
		  	callback()
		  })
	}

	return {
		ping: function (interval) {
			interval = interval || 1000 * 60 * 60 //a hour
			updateFeeds()
			setInterval(function () {
				updateFeeds()
			}, interval)
		}
	}
})()
