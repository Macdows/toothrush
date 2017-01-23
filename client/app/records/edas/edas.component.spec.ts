'use strict';

describe('Component: EdasComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.edas'));

  var EdasComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EdasComponent = $componentController('edas', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
