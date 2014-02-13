/**
* Routes module for parsing requests
*/
var restify = require('restify')
  , fs = require('fs')
  , mongoose = require('mongoose');

module.exports = function (app, config) {
    app.get('/', function (req, res) {
      res.send({'message':'Success'});
    });
}






