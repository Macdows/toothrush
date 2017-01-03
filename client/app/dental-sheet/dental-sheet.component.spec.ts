'use strict';

describe('Component: DentalSheetComponent', function() {
  // load the controller's module
  beforeEach(module('toothrushApp.dental-sheet'));

  var DentalSheetComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DentalSheetComponent = $componentController('dental-sheet', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
