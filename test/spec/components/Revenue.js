'use strict';

describe('Revenue', function () {
  var Revenue, component;

  beforeEach(function () {
    Revenue = require('../../../src/scripts/components/Revenue.jsx');
    component = Revenue();
  });

  it('should create a new instance of Revenue', function () {
    expect(component).toBeDefined();
  });
});
