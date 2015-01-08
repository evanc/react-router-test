/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var {DefaultRoute, Route, Routes, RouteHandler, Link} = Router;

var SuperLocation = require('./SuperLocation');

var Expenses = require('./Expenses');
var Revenue = require('./Revenue');

require('../../styles/Forecast.less');

var Page = React.createClass({
    render: function () {
        return (
            <div>
                WOWOWOWOWOW!
                <Link to="expenses">Expenses</Link><br />
                <Link to="revenue">Revenue</Link><br />

                <RouteHandler />
            </div>
        );
    }
});

var Forecast = React.createClass({
    getInitialState: function () {
        return {
            loaded: 'nope',
            route: <div>not navigated yet</div>
        };
    },

    routeHandler: SuperLocation,

    setRoutes: function() {
        var routes = (
            <Route path="/" handler={Page}>
                <DefaultRoute handler={Expenses} />
                <Route name="expenses" handler={Expenses} />
                <Route name="revenue" handler={Revenue} />
            </Route>
        );

        var that = this;

        console.log('about to run');

        Router.run(routes, this.routeHandler, function (handler) {
            that.setState({
                loaded: 'yeah',
                route: handler
            });
        });
    },

    componentDidMount: function() {
        this.setRoutes();
    },

    componentDidUpdate: function(prevProps, prevState) {
        // this.setRoutes();
    },

    render: function () {
        if (this.state.loaded === 'yeah') {
            // debugger
        }
        return (
            <div>
                XXXD<br />
                {this.state.loaded}
                {this.state.route}
            </div>
        );
        }
    });

module.exports = Forecast;


