/** @jsx React.DOM */

var RacktTestApp = require('./RacktTestApp');
var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Routes} = Router;

var Forecast = require('./Forecast');
var Scoreboard = require('./Scoreboard');


var Page = React.createClass({
    render: function () {
        return <div>Welcome to the demo...</div>;
    }
});

// debugger

var routes = (
    <Route path="/" handler={RacktTestApp}>
        <DefaultRoute handler={Page}></DefaultRoute>
        {Forecast.getRoutes()}
        <Route name="scoreboard" path="/scoreboard" handler={Scoreboard}>
        </Route>
    </Route>
);

Router.run(routes, function (Handler, state) {
    React.render(<Handler />, document.getElementById('content'));
});
