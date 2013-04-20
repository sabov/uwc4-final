module.exports = (function(){
	var FeedParser = require('feedparser')
  		// , feed = '../test/feeds/rss2sample.xml'
		, modelFeed = require('../models/model_feed');


	var updateFeeds function () {
		getAllFeeds(function (feeds) {
			feeds.forEach(function (feed) {
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
		fs.createReadStream(feed.url)
		  .pipe(new FeedParser())
		  .on('error', function (error) {
		    console.error(error);
		  })
		  .on('meta', function (meta) {
		    console.log('===== %s =====', meta.title);
		  })
		  .on('article', function(article){
		    console.log('Got article: %s', article.title || article.description);
		  })
		  .on('end', function () {
		  	callback()
		  })
	}

	return {
		ping: function (interval) {
			interval = interval || 1000 * 60 * 60 //a hour
			setInterval(function () {
				console.log('update feeds');
				updateFeeds()
			}, interval)
		}
	}
})()
