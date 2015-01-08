/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/Expenses.less');

var Router = require('react-router');
var {Link, State} = Router;

var Expenses = React.createClass({
  mixins: [State],
  render: function () {


    return (
        <div>
          <p>Content for Expenses</p>

          <ul>
            <li><Link to="forecast/expenses" params={{expenseId: 'ABCD-1234'}}>ABCD-1234</Link></li>
            <li><Link to="forecast/expenses" params={{expenseId: 'WXYZ-7890'}}>WXYZ-7890</Link></li>
          </ul>

          <p className="selected-expense">
            Selected: 
            {this.getParams().expenseId || 'none'}
          </p>

        </div>
      );
  }
});

module.exports = Expenses;


