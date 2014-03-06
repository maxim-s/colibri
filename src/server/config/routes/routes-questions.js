var QuestionController = require("../../controllers/QuestionController")
	, mongoose = require('mongoose')
	, questionsCollection = mongoose.model('Question');


module.exports = function(app, config){
	var questionController = new QuestionController(questionsCollection);

	app.get('questions', questionController.list.bind(questionController));

	app.get('questions/:id', questionController.get);

    app.post('questions/:id', questionController.update);

    app.put('questions', questionController.create);

    app.del('questions/:id',questionController.remove);
} 