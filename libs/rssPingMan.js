module.exports = (function(){
	var FeedParser = require('feedparser')
  		, feed = '../test/feeds/rss2sample.xml';

	fs.createReadStream(feed)
	  .pipe(new FeedParser())
	  .on('error', function (error) {
	    console.error(error);
	  })
	  .on('meta', function (meta) {
	    console.log('===== %s =====', meta.title);
	  })
	  .on('article', function(article){
	    console.log('Got article: %s', article.title || article.description);
	  });

	var updateFeeds() {

	}

	return {
		ping: function () {
			updateFeeds()
		}
	}
})()
