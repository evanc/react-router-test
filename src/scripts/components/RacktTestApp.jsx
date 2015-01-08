/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var {DefaultRoute, Route, RouteHandler, Link} = require('react-router');


// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var RacktTestApp = React.createClass({
  render: function() {
    return (
        <div>
            <div className="nav">
                <Link to="forecast">Forecast</Link>
                <span> • </span>
                <Link to="scoreboard">Scoreboard</Link>
            </div>
            <RouteHandler />
        </div>
    );
  }
});

module.exports = RacktTestApp;
