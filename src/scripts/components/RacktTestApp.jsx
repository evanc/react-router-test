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

// var imageURL = require('../../images/yeoman.png');

/* 

            <Routes location="history">
                <Route name="forecast" path="/" handler={Forecast}>
                </Route>
                <Route name="scoreboard" path="/scoreboard" handler={Scoreboard}></Route>
            </Routes>

*/

var RacktTestApp = React.createClass({
  render: function() {
    return (
        <div>
            <Link to="forecast">Forecast</Link><br />
            <Link to="scoreboard">Scoreboard</Link><br />
            <RouteHandler />
        </div>
    );
  }
});

module.exports = RacktTestApp;
