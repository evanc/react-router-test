/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var {DefaultRoute, Route, Routes, RouteHandler, Link, State, NotFoundRoute} = Router;


require('../../styles/Forecast.less');


var FakePage = React.createClass({
    render: function () {
        return (
            <div>
                fake page
                <RouteHandler />
            </div>
        );
    }
});

var Page = React.createClass({
    render: function () {
        return (
            <div>
                XXXD<br />
                <Link to="diplo/forecast">Expenses</Link><br />
                <Link to="forecast/revenue">Revenue</Link>
                <RouteHandler />
            </div>
        );
    }
});

var Forecast = React.createClass({

    mixins: [State],

    getInitialState: function() {
        return {
            router: <span>No.</span>
        };
    },

    componentDidMount: function() {
        var routes = <Route path="/" handler={FakePage}>
            <Route name="diplo/forecast" path="forecast" handler={Page} />
            <NotFoundRoute name="not-found" handler={FakePage} />
        </Route>

        var that = this;

        Router.run(routes, function (router) {
            that.setState({
                router: router
            });
        });
    },

    componentDidUpdate: function(prevProps, prevState) {
        // this.setRoutes();
    },

    render: function () {

        console.log('rendering', this.state.router);

        return (
            <div>
                L
                {this.state.router}
                M
            </div>
        );
        }
    });

module.exports = Forecast;


