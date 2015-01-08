'use strict';

describe('Expenses', function () {
  var Expenses, component;

  beforeEach(function () {
    Expenses = require('../../../src/scripts/components/Expenses.jsx');
    component = Expenses();
  });

  it('should create a new instance of Expenses', function () {
    expect(component).toBeDefined();
  });
});
