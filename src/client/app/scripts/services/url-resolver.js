define(['angular'], function (angular) {
  'use strict';

  angular.module('colibriApp.services.UrlResolver', [])
	.service('$url', function UrlResolver() {
          var host = "http://localhost:3000/";
		return {
            getAuthUrl:function(){
                return host + "auth/google";
            }
		};
	});
});
