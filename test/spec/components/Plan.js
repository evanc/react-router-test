'use strict';

describe('Plan', function () {
  var Plan, component;

  beforeEach(function () {
    Plan = require('../../../src/scripts/components/Plan.jsx');
    component = Plan();
  });

  it('should create a new instance of Plan', function () {
    expect(component).toBeDefined();
  });
});
