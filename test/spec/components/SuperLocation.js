'use strict';

describe('SuperLocation', function () {
  var SuperLocation, component;

  beforeEach(function () {
    SuperLocation = require('../../../src/scripts/components/SuperLocation.jsx');
    component = SuperLocation();
  });

  it('should create a new instance of SuperLocation', function () {
    expect(component).toBeDefined();
  });
});
