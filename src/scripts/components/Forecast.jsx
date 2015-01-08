/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var {DefaultRoute, Route, Routes, RouteHandler, Link} = Router;


require('../../styles/Forecast.less');


var Forecast = React.createClass({

    componentDidMount: function() {

    },

    componentDidUpdate: function(prevProps, prevState) {
        // this.setRoutes();
    },

    render: function () {

        return (
            <div>
                XXXD<br />
                <Link to="forecast/expenses">Expenses</Link><br />
                <Link to="forecast/revenue">Revenue</Link>
                <RouteHandler />
            </div>
        );
        }
    });

module.exports = Forecast;


