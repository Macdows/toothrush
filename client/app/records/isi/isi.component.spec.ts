'use strict';

describe('Component: IsiComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.isi'));

  var IsiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IsiComponent = $componentController('isi', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
