var mysql = require('../libs/mysql')


module.exports = (function () {
    var sql = {
        createFeed: 'INSERT INTO feed (url, username, title, dir) VALUES (:url, :username, :title, :dir)',
        createArticle: 'INSERT INTO article (feed_id, author, description, is_readed, title) VALUES (:feed_id, :author, :description, :is_readed, :title)',
        deleteFeedById: 'delete FROM feed WHERE id = :id',
        getFeedsByUser: 'SELECT * FROM feed WHERE username = :username',
        getFeeds: 'SELECT * FROM feeds',
        getArticleByFeedId: 'SELECT * FROM article WHERE feed_id = :feed_id'
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


    var _getArticleByFeedId = function(params, callback) {
        mysql.query(sql.getArticleByFeedId, params, function (res) {
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

    var _createArticle = function(params, callback) {
        mysql.query(sql.createArticle, params, function (res) {
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
        deleteFeedById: _deleteFeedById,
        getArticleByFeedId: _getArticleByFeedId,
        createArticle: _createArticle
    };
})();
