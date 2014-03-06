/*
*	Question controller
*
*/

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
	res.send({});
}
QuestionController.prototype.remove = function(req,res){
	res.send({});
}

