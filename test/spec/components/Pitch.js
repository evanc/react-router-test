'use strict';

describe('Pitch', function () {
  var Pitch, component;

  beforeEach(function () {
    Pitch = require('../../../src/scripts/components/Pitch.jsx');
    component = Pitch();
  });

  it('should create a new instance of Pitch', function () {
    expect(component).toBeDefined();
  });
});
