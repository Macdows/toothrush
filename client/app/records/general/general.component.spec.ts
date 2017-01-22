'use strict';

describe('Component: GeneralComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.general'));

  var GeneralComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GeneralComponent = $componentController('general', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
