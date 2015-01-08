'use strict';

describe('Main', function () {
  var RacktTestApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    RacktTestApp = require('../../../src/scripts/components/RacktTestApp.jsx');
    component = RacktTestApp();
  });

  it('should create a new instance of RacktTestApp', function () {
    expect(component).toBeDefined();
  });
});
