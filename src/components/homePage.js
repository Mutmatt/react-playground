"use strict";

var React = require('react');
var CreateClass = require('create-react-class');

var Home = CreateClass( {
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Matt's Admin</h1>
                <p>React, node, react router, and flux in a playground</p>
            </div>
        );
    }
});

module.exports = Home;