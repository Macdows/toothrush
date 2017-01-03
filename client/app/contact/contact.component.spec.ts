'use strict';

describe('Component: ContactComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.contact'));

  var ContactComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ContactComponent = $componentController('contact', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
