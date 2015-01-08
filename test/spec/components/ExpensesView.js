'use strict';

describe('ExpensesView', function () {
  var ExpensesView, component;

  beforeEach(function () {
    ExpensesView = require('../../../src/scripts/components/ExpensesView.jsx');
    component = ExpensesView();
  });

  it('should create a new instance of ExpensesView', function () {
    expect(component).toBeDefined();
  });
});
