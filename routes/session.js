/*
 * GET users listing.
 */

var mysql = require('../libs/mysql'),
    modelUser = require('../models/model_user');

var _loginUser = function (req, res, user) {
    req.session.username = user.username;
    req.session.role = user.role || '';
    req.method = 'get';
    res.redirect(req.body.redirect || '/');
};

exports.registration = function (req, res) {
    var params = req.body;
    modelUser.createUser(params, function (result) {
        if (!result.success) {
            res.render('index', {
                loginErrorMessage: result.message
            });
        } else {
            _loginUser(req, res, params);
        }
    });
};

exports.login = function (req, res) {
    var params = req.body;
    modelUser.getUserByLoginAndPassword(params, function (result) {
        if (!result.success) {
            res.redirect('?login_error=false');
        } else {
            _loginUser(req, res, result.data);
        }
    });
};
exports.logout = function (req, res) {
    req.session.username = null;
    req.session.role = null;
    res.redirect('/');
};
