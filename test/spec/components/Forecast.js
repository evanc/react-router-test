'use strict';

describe('Forecast', function () {
  var Forecast, component;

  beforeEach(function () {
    Forecast = require('../../../src/scripts/components/Forecast.jsx');
    component = Forecast();
  });

  it('should create a new instance of Forecast', function () {
    expect(component).toBeDefined();
  });
});
