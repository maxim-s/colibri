/**
* Routes module for parsing requests
*/
module.exports = function (app, config,provider) {
    app.get('/', function (req, res) {
      res.send({'message':'Success'});
    });
    app.get('/auth/google', provider.signIn(), function (req, res) {
        res.send({'message':'Success'});
    });
}

