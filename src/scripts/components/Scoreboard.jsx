/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Router = require('react-router');
var {Route, RouteHandler, Link, State} = Router;

require('../../styles/Scoreboard.less');


var Scoreboard = React.createClass({
  render: function () {
    return (
        <div>
            <Link to="scoreboard/expenses">Expenses</Link>
            <p>Content for Scoreboard</p>
            <RouteHandler />
        </div>
      );
  }
});

module.exports = Scoreboard;


