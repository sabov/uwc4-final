module.exports = (function(){
	var FeedParser = require('feedparser')
		, modelFeed = require('../models/model_feed')
		, request = require('request')
		, fs = require('fs');


	var updateFeeds = function () {
		modelFeed.getAllFeed({}, function (result) {
			result.data.forEach(function (feed) {
				updateFeed(feed, function () {
					console.log('finish parsing');
				});
			})
		});
	}

	var getUserFeeds = function (callback) {

	}

	var updateFeed = function (feed, callback) {
		callback = callback || function(){}
		request(feed.url)
		  .pipe(new FeedParser())
		  .on('error', function (error) {
		    console.error(error);
		  })
		  .on('meta', function (meta) {
		    console.log('===== %s =====', meta.title);
		  })
		  .on('article', function(article){
		  	article.feed_id = feed.id;
		  	modelFeed.checkArticle(article, function (result) {
		  		if (!result.data) { //if not exist
				  	modelFeed.createArticle(article, function (data) {
				  		console.log('new article created');
				  	})
		  		}
		  	})
		  })
		  .on('end', function () {
		  	callback()
		  })
	}

	return {
		ping: function (interval) {
			interval = interval || 1000 * 60 // 1 min
			updateFeeds()
			setInterval(function () {
				updateFeeds()
			}, interval)
		}
	}
})()
