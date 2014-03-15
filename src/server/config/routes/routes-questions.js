var QuestionController = require("../../controllers/QuestionController");


module.exports = function(app, config){
	var questionController = new QuestionController();

	app.get('questions', questionController.list);

	app.get('questions/:id', questionController.get);

    app.post('questions/:id', questionController.update);

    app.put('questions', questionController.create);

    app.del('questions/:id',questionController.remove);
} 