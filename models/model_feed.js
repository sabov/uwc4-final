var mysql = require('../libs/mysql')


module.exports = (function () {
    var sql = {
        createFeed: 'INSERT INTO feed (url, username, title, dir) VALUES (:url, :username, :title, :dir)',
        deleteFeedById: 'delete FROM feed WHERE id = :id',
        getFeedsByUser: 'SELECT * FROM feed WHERE username = :username',
        getFeeds: 'SELECT * FROM feeds',
        getArticlesByFeedId: 'SELECT * FROM articles WHERE feed_id = :feed_id'
    };

    var _getFeedByUser = function(params, callback) {
        mysql.query(sql.getFeedsByUser, params, function (res) {
            if (!res.length) {
                callback({
                    success: false,
                    message: 'Feeds not found'
                });
            } else {
                callback({
                    success: true,
                    data: res
                });
            }
        });
    };

    var _createFeed = function(params, callback) {
        mysql.query(sql.createFeed, params, function (res) {
            if (!res) {
                callback({
                    success: false,
                    message: 'Can not create'
                });
            } else {
                callback({
                    success: true,
                    data: res
                });
            }
        });
    };

    var _deleteFeedById = function(params, callback) {
        mysql.query(sql.deleteFeedById, params, function (res) {
            if (!res) {
                callback({
                    success: false,
                    message: 'Can delete feed'
                });
            } else {
                callback({
                    success: true,
                    data: res
                });
            }
        });
    };

    return {
        createFeed: _createFeed,
        getFeedByUser: _getFeedByUser,
        deleteFeedById: _deleteFeedById
    };
})();
