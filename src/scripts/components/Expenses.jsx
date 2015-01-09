/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/Expenses.less');

var Router = require('react-router');
var {Route, Link, State} = Router;

var ExpensesView = require('./ExpensesView');
var ExpensesEdit = require('./ExpensesEdit');

var Expenses = React.createClass({
  mixins: [State],
  render: function () {

    return (
        <div>
          <p>Content for Expenses</p>

          <ul>
            <li><Link to="forecast/expenses/view" params={{expenseId: 'ABCD-1234'}}>First Expense</Link></li>
            <li><Link to="forecast/expenses/view" params={{expenseId: 'WXYZ-7890'}}>Second Expense</Link></li>
          </ul>

          <p className="selected-expense">
            Selected: 
            {this.getParams().expenseId || 'none'}
          </p>

        </div>
      );
  },

  statics: {
    getRoutes: function (tabName) {
        return (
            <Route name={tabName + "/expenses"} path={"expenses"} handler={Expenses}>
                <Route name={tabName + "/expenses/view"} path=":expenseId/view" handler="ExpensesView" />
                <Route name={tabName + "/expenses/edit"} path=":expenseId/edit" handler="ExpensesEdit" />
            </Route>
        );
    }
  }
});

module.exports = Expenses;


