/**
 * Main application server setup
 */

// Args
var args = process.argv;
var configName = args[2] || 'config';

// Modules
var restify = require("restify")
    , mongoose = require('mongoose')
    , config = require('./config/' + configName)
    , auth = require('./auth-provider')
    , fs = require('fs')
    , db = require('./db')
    ,  passport = require('passport')
    , path = require('path');

// Paths
var routes_path = config.root + '/config/routes'
var models_path = config.root + '/models'
var auth_path = config.root + '/auth'

db.open();

// Enables CORS
var enableCORS = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

// Bootstrap models
fs.readdirSync(models_path).forEach(function (file) {
    console.log("Loading model " + file);
    require(models_path + '/' + file);
});

// Bootstrap auth stategies
fs.readdirSync(auth_path).forEach(function (file) {
    console.log("Loading auth stategies " + path.join(auth_path, file));
    require(path.join(auth_path, file)).register();
});


// Configure the server
var app = restify.createServer({
    //certificate: ...,
    //key: ...,
    name: 'colibri',
    version: config.version
});

// enable CORS!
app.use(enableCORS);

var provider = auth.create(passport, config);
// Bootstrap routes
fs.readdirSync(routes_path).forEach(function (file) {
    console.log("Loading routes " + file);
    require(routes_path + '/' + file)(app, config, provider);
});


app.on('error', function (err) {
    if (err.errno === 'EADDRINUSE') {
        console.log('Port already in use.');
        process.exit(1);
    } else {
        console.log(err);
    }

});

app.listen(config.port);
console.log('App started on port ' + config.port);