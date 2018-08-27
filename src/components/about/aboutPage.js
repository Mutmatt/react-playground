"use strict";

var React = require('react');
var CreateClass = require('create-react-class');

var About = CreateClass( {
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This app uses a few different technologies!</p>
                    <ol>
                        <li>Farts</li>
                        <li>Butts</li> 
                        <li>Oh poops</li> 
                    </ol>
                
            </div>
        );
    }
});

module.exports = About;