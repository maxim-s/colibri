var Question = require('../../models/Question.js')
               , db = require('../../db');

describe('Db operations with questions', function() {
    db.open('mongodb://localhost/test');

	afterEach(function(){
		// TODO: it doesn't work
		Question.remove({}); 
	});

	it('Question has to be saved into the mongo', function(done){
		var question = new Question({ 
			title: 'test',
			author: 'author',
			body: 'body'
		});
		question.save();
		expect(question._id).not.toBe(undefined);
		done();
	});

	it('Question answers has to be save into the mongo', function(done){
		var questionForSave = new Question({ 
			title: 'test',
			author: 'author',
			body: 'body',
			answers: [
				{
					body: 'a_body',
					author: 'a_author',
					rating: 10,
				}
			]
		});

		questionForSave.save(function (err, question, numberAffected) {
  			expect(question.answers[0].body).toBe('a_body');
  			expect(question.answers[0].author).toBe('a_author');
  			expect(question.answers[0].rating).toBe(10);
  			done();
		});		
	});

	it('Question comments has to save into the mongo', function(done){
		var questionForSave = new Question({ 
			title: 'test',
			author: 'author',
			body: 'body',
			comments: [
				{
					text: 'c_text',
					author: 'c_author',
				}
			]
		});

		questionForSave.save(function (err, question, numberAffected) {
  			expect(question.comments[0].text).toBe('c_text');
  			expect(question.comments[0].author).toBe('c_author');
  			done();
		});	
	});

	it('Question title has to be set up', function(done) {
		var questionForSave = new Question({
			author: 'author',
			body: 'body'
		});

		questionForSave.save(function(err, question, numberAffected) {
			expect(question).toBe(undefined);
			done();
		});
	});

	it('Question comment text has to be cut to 160 chars', function(done) {
		var comment_text = Array(161).join("a");

		var questionForSave = new Question({
			title: 'title',
			author: 'author',
			body: 'body',
			comments: [
				{
					text: comment_text,
					author: 'c_author'
				}
			]
		});

		questionForSave.save(function(err, question, numberAffected) {
			expect(question.comments[0].text.length).toBe(160);
			done();
		});
	});

	it('Question comment must have text field', function(done) {

		var questionForSave = new Question({
			title: 'title',
			author: 'author',
			body: 'body',
			comments: [
				{
					author: 'c_author'
				}
			]
		});

		questionForSave.save(function(err, question, numberAffected) {
			expect(question).toBe(undefined);
			done();
		});
	});
});