/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: QuestionViewCtrl', function () {

    // load the controller's module
    beforeEach(module('colibriApp.controllers.QuestionViewCtrl'));

    var QuestionViewCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      QuestionViewCtrl = $controller('QuestionViewCtrl', {
        $scope: scope,
        $resource : function() { return { get : function() { return { } } } },
        $routeParams : {id:'531890ef64382f5a6b3a0a86'}
      });
    }));

    it('should get question to the scope', function () {
      expect(scope.question).not.toBeUndefined();
    });
  });
});
