module.exports = function(app, config){
	app.get('questions', function(req, res){
		res.send({});
    });

	app.get('questions/:id', function(req, res){
		res.send({});
    });

    app.post('questions/:id', function(req, res){
		res.send({'message': 'Success'});
    });

    app.put('questions', function(req, res){
		res.send({'message': 'Success'});
    });

    app.del('questions/:id', function(req, res){
		res.send({'message': 'Success'});
    });
} 