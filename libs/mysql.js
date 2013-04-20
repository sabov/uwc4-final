module.exports = (function () {
    var mysql = require('mysql'),
        dbConfig = require('../config/db'),
        client = mysql.createConnection(dbConfig);

    var _prepareSql = function (sql, params) {
        var reForArray = /\$(\d+)/gi;
        var reForObject = /\:(\w+)/gi;
        if (params instanceof Array) {
            sql = sql.replace(reForArray, function (a, b) {
                return client.escape(params[b - 1]);
            });
            return sql;
        }

        if (params instanceof Object) {
            sql = sql.replace(reForObject, function (a, b) {
                return client.escape(params[b]);
            });
            return sql;
        }
    };

    return {
        /*
            @arguments : sql,[params], callback
         */
        query: function () {
            var params, sql, callback;
            if (arguments.length === 2) {
                sql = arguments['0'];
                params = [];
                callback = arguments['1'];
            }
            if (arguments.length === 3) {
                sql = arguments['0'];
                params = arguments['1'];
                callback = arguments['2'];
            }
            sql = _prepareSql(sql, params);
            console.log(sql);
            client.query(sql, function (err, res, fields) {
                if (err) {
                    throw err;
                }
                callback(res, fields);
            });
        }
    };
})();