/** @jsx React.DOM */

var RacktTestApp = require('./RacktTestApp');
var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Routes} = Router;

var Forecast = require('./Forecast');
var Scoreboard = require('./Scoreboard');

var routes = (
    <Route path="/" handler={RacktTestApp}>
        <DefaultRoute handler={Forecast}></DefaultRoute>
        <Route name="forecast" path="forecast/" handler={Forecast}></Route>
        <Route name="scoreboard" path="scoreboard/" handler={Scoreboard}></Route>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
});
