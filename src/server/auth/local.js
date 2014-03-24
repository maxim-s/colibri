var passport = require('passport')
	, local_strategy = require('passport-local').Strategy;

// will register authentication strategy for 'local'
module.exports = {
	register: function(){
		console.log('The auth strategy "passport-local" was registered.');

		passport.use(new local_strategy(
		  function(userName, password, done) {
		  	return done(null, userName);
		  }
		));
	}
}