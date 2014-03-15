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

	it('Server should respond to /questions', function(done){
		_client.get('/questions', function(err, req, res, obj){
			expect(res.statusCode).toBe(200);
			done();
		});
	})
	
	
	it('Server should respond to /questions/:id (GET)', function(done){
		_client.get('/questions/1', function(err, req, res, obj){
			expect(res.statusCode).toBe(200);
			done();
		});
	})

	it('Server should respond to /questions/:id (POST)', function(done){
		_client.post('/questions/1', function(err, req, res, obj){
			expect(res.statusCode).toBe(200);
			done();
		});
	})

	it('Server should respond to /questions', function(done){
        _client.put('/questions', question, function(err, req, res, obj){
            expect(res.statusCode).toBe(200);
            var resultQuestion = JSON.parse(res.body);
            expect(resultQuestion._id).toBeDefined();
			done();
		});
	})

    it('Server should respond 404 on not existed question /question/:id (DEL)', function(done){
	
        _client.del('/questions/1', function(err, req, res, obj){
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