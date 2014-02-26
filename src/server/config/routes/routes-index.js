/**
* Routes module for parsing requests
*/
module.exports = function (app, config) {
    app.get('/', function (req, res) {
      res.send({'message':'Success'});
    });
}

