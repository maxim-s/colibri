/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: QuestionsCtrl', function () {

    // load the controller's module
    beforeEach(module('colibriApp.controllers.QuestionsCtrl'));

    var QuestionsCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      QuestionsCtrl = $controller('QuestionsCtrl', {
        $scope: scope
      });
    }));

    xit('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
