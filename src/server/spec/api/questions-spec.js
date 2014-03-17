/* // server

 * API
 * Authentication
 * Authorization

 // client
 * User scenarios
*/

// spec/questions-spec.js
var restify = require("restify");
// var questions = require("../config/routes");
 
describe('Routes for questions', function() {
	var _client;
	
	 var question = {
            title: 'test title',
            author: 'test author',
            body: 'test body'
        };

	beforeEach(function(){
		_client = restify.createJsonClient({
			url:'http://127.0.0.1:3000', 
			version: '*'});
    })
	

	/*it('Server should respond to /', function (){
	    _client.get('/', function(err, req, res, obj){
	        expect(res.statusCode).toBe(200);
	    });
	})*/

	it('Server should respond to empty /questions', function(done){
		_client.get('/questions', function(err, req, res, obj){
			expect(res.statusCode).toBe(200);
			done();
		});
	})
	

	it('Server should respond 404 on not existed question /question (POST)', function(done){	
	
		_client.post('/question', question, function(err, req, res, obj){
			expect(res.statusCode).toBe(404);
			done();
		});
	});
	
	it('Server should return created question /questions (POST)', function(done){
		 _client.post('/questions', question, function(err, req, res, obj){
             var postQuestion = JSON.parse(res.body);
             _client.get('/questions/' + postQuestion._id, function(err, req, res, obj){
                 var getQuestion = JSON.parse(res.body);
                 expect(getQuestion._id).toBe(postQuestion._id);
                 done();
             });

		});
	});


    it('Server should return update question /questions (POST)', function(done){
        _client.post('/questions', question, function(err, req, res, obj){
            var questionForUpdate = JSON.parse(res.body);
            questionForUpdate.title = 'This is new test title';

            _client.post('/questions', questionForUpdate, function(err, req, res, obj){

                _client.get('/questions/' + questionForUpdate._id, function(err, req, res, obj){
                    var getQuestion = JSON.parse(res.body);
                    console.log("get question" ,getQuestion);
                    expect('This is new test title').toBe(getQuestion.title);
                    done();
                });
            });

        });
    });

	it('Server should create question /questions (PUT)', function(done){
        _client.put('/questions', question, function(err, req, res, obj){
            expect(res.statusCode).toBe(200);
            var resultQuestion = JSON.parse(res.body);
            expect(resultQuestion._id).toBeDefined();
			done();
		});
	})
	
	it('Server should return question by id /questions/:id', function(done){
        _client.put('/questions', question, function(err, req, res, obj){
			var putQuestion = JSON.parse(res.body);
			_client.get('/questions/' + putQuestion._id, function(err, req, res, obj){
				expect(res.statusCode).toBe(200);
				var getQuestion = JSON.parse(res.body);
				expect(putQuestion._id).toBe(getQuestion._id);
				done();
			});
		});
	})

    it('Server should respond 404 on not existed question /question/:id (DEL)', function(done){
	
        _client.del('/questions/1', function(err, req, res, obj){
            expect(res.statusCode).toBe(404);
            done();
        });
    })
	
	it('Server should respond 404 on not existed question /question/:id (GET)', function(done){
	
        _client.get('/questions/1', function(err, req, res, obj){
            expect(res.statusCode).toBe(404);
            done();
        });
    })

    it('Server should respond on existing question /question/:id (DEL)', function(done){
		_client.put('/questions', question, function(err, req, res, obj){           
            var resultQuestion = JSON.parse(res.body);
			_client.del('/questions/' + resultQuestion._id, function(err, req, res, obj){
                expect(res.statusCode).toBe(200);
                done();
            });           
		});       
    })
	
});