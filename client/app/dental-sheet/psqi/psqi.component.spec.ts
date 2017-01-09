'use strict';

describe('Component: PsqiComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.psqi'));

  var PsqiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PsqiComponent = $componentController('psqi', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
