'use strict';

describe('ExpensesEdit', function () {
  var ExpensesEdit, component;

  beforeEach(function () {
    ExpensesEdit = require('../../../src/scripts/components/ExpensesEdit.jsx');
    component = ExpensesEdit();
  });

  it('should create a new instance of ExpensesEdit', function () {
    expect(component).toBeDefined();
  });
});
