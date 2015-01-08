'use strict';

describe('Scoreboard', function () {
  var Scoreboard, component;

  beforeEach(function () {
    Scoreboard = require('../../../src/scripts/components/Scoreboard.jsx');
    component = Scoreboard();
  });

  it('should create a new instance of Scoreboard', function () {
    expect(component).toBeDefined();
  });
});
