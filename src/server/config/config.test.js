/**
 * Environment dependent configuration properties
 */
module.exports = {
      root: require('path').normalize(__dirname + '/..')
      , host: 'localhost'
	    , port: '3000'
	    , db_prefix: 'mongodb'
  	  , db_port: '27017'
	    , db_database: 'test_database'
		, auth_type: 'local'		
   
}



