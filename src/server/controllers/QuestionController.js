/*
*	Question controller
*
*/

var Question = require('../models/Question');


var QuestionController = module.exports = function (questionsCollection) {
	this.questionsCollection = questionsCollection;
}

QuestionController.prototype.list = function(req,res){
	this.questionsCollection.count({}, function(err, count) { 
		console.log(count);
	});
	res.send({});
}
QuestionController.prototype.get = function(req,res){
	res.send({});
}
QuestionController.prototype.update = function(req,res){
	res.send({});
}
QuestionController.prototype.create = function(req,res){
    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        var questionData = JSON.parse(body);
        Question.create(questionData, function (err, obj) {
            if (err) return handleError(err);

            // saved!
            res.send(200, obj);
        })
    });
}
QuestionController.prototype.remove = function(req,res){

    res.send(200);
}

