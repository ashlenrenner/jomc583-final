var db = require('../config/db');

exports.list = function(req, res) {
    var collection = db.get().collection('dashboard');

    collection.find({}).toArray(function(err, results) {
        res.render('dashboard/index', {users: results});
    });
};
