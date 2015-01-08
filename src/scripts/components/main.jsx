/** @jsx React.DOM */

var RacktTestApp = require('./RacktTestApp');
var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Routes} = Router;

var Forecast = require('./Forecast');
var Scoreboard = require('./Scoreboard');

var Expenses = require('./Expenses');
var Revenue = require('./Revenue');

var routes = (
    <Route path="/" handler={RacktTestApp}>
        <DefaultRoute handler={Forecast}></DefaultRoute>
        <Route name="forecast" path="/forecast" handler={Forecast}>
            <Route name="forecast/expenses" path="expenses" handler={Expenses} />
            <Route name="forecast/revenue" path="revenue" handler={Revenue} />
        </Route>
        <Route name="scoreboard" path="/scoreboard" handler={Scoreboard}>
            <Route name="scoreboard/expenses" path="expenses" handler={Expenses} />
            <Route name="scoreboard/revenue" path="revenue" handler={Revenue} />
        </Route>
    </Route>
);

Router.run(routes, function (Handler, state) {
    React.render(<Handler />, document.getElementById('content'));
});
