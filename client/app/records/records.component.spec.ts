'use strict';

describe('Component: RecordsComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.records'));

  var RecordsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    RecordsComponent = $componentController('records', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
