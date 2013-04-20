/*
 * GET users listing.
 */

var modelFeed = require('../models/model_feed');

exports.getFeedByUser = function (req, res) {
    var params = req.body;
    params.username = req.session.username
    modelFeed.getFeedByUser(params, function (result) {
    	res.json(result);
    });
};

exports.createFeed = function (req, res) {
    var params = req.body;
    params.username = req.session.username
    modelFeed.createFeed(params, function (result) {
    	res.json(result);
    });
};

exports.deleteFeedById = function (req, res) {
    var params = req.body;
    params.username = req.session.username
    modelFeed.deleteFeedById(params, function (result) {
    	res.json(result);
    });
};

exports.getArticleByFeedId = function (req, res) {
    var params = req.query;
    params.username = req.session.username
    modelFeed.getArticleByFeedId(params, function (result) {
    	res.json(result);
    });
};

exports.createArticle = function (req, res) {
    var params = req.body;
    params.username = req.session.username
    modelFeed.createArticle(params, function (result) {
    	res.json(result);
    });
};
