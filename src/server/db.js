// Modules
var mongoose = require('mongoose')
    , config = require('./config/config');

module.exports = {
    open:  function(conn){
        conn = conn || config.db_prefix +'://'+config.host+':'+config.db_port+'/'+config.db_database;

        // Database
        console.log(conn);
        mongoose.connect(conn, {server:{auto_reconnect:true}});
        var db = mongoose.connection;

        mongoose.connection.on('opening', function() {
            console.log("reconnecting... %d", mongoose.connection.readyState);
        });
        db.once('open', function callback () {
            console.log("Database connection opened.");
        });
        db.on('error', function (err) {
            console.log("DB Connection error %s", err);
        });
        db.on('reconnected', function () {
            console.log('MongoDB reconnected!');
        });
        db.on('disconnected', function() {
            console.log('MongoDB disconnected!');
            mongoose.connect(conn, {server:{auto_reconnect:true}});
        });
    }
}

