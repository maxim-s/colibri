/**
* Main application server setup
*/

// Modules
var restify = require("restify")
  , mongoose = require('mongoose')
  , config = require('./config/config')
  , fs = require('fs')
  , db = require('./db');

// Paths
var routes_path = config.root + '/config/routes'
var models_path = config.root + '/models'

db.open();

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