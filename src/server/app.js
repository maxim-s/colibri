/**
* Main application server setup
*/

// Modules
var restify = require("restify")
  , mongoose = require('mongoose')
  , config = require('./config/config')
  , fs = require('fs');

// Paths
var routes_path = config.root + '/config/routes'
var models_path = config.root + '/models'
var config_path = config.root + '/config'

// Database
var connectStr = config.db_prefix +'://'+config.host+':'+config.db_port+'/'+config.db_database;
console.log(connectStr);
mongoose.connect(connectStr, {server:{auto_reconnect:true}});
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
  mongoose.connect(connectStr, {server:{auto_reconnect:true}});
});


// Bootstrap models
fs.readdirSync(models_path).forEach(function (file) {
  console.log("Loading model " + file);
  require(models_path+'/'+file);
});


// Configure the server
var app = restify.createServer({
  //certificate: ...,
  //key: ...,
  name: 'colibri',
  version: config.version
});


// Bootstrap routes
fs.readdirSync(routes_path).forEach(function (file) {
  console.log("Loading routes " + file);
  require(routes_path+'/'+file)(app, config);
});



app.on('error', function(err) {
    if(err.errno === 'EADDRINUSE') {
      console.log('Port already in use.');
      process.exit(1);
    } else {
      console.log(err);
    }

});

app.listen(config.port);
console.log('App started on port ' + config.port);
 







