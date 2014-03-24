var passport = require('passport')
	, google_strategy = require('passport-google-oauth').OAuth2Strategy;

// will register authentication strategy for 'passport-google-oauth'
module.exports = {
	register: function(){
		console.log('The auth strategy "passport-google-oauth" was registered.');

		passport.use(new google_strategy({
		    clientID: 'clientId',
		    clientSecret: 'clientSecret',
		    callbackURL: 'callbackURL'
		  },
		  function(accessToken, refreshToken, profile, done) {
		    UserDB.findOne({email: profile._json.email},function(err,usr) {
		        usr.token = accessToken;    
		        usr.save(function(err,usr,num) {
		            if(err) {
		                console.log('error saving token');
		            }
		        });
		        process.nextTick(function() {
		            return done(null,profile);
		        });
		    });
		  }
		));
	}
}