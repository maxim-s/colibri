module.exports = {
      create:function(passport, config){
          return {
              signIn:function(){
                  return passport.authenticate(config.auth_type);
              }
          };
      }
}



