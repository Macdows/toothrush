'use strict';

describe('Component: Dn4Component', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.dn4'));

  var Dn4Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Dn4Component = $componentController('dn4', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
