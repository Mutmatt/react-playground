"use strict";

var React = require('react');
var CreateClass = require('create-react-class');

var Header = CreateClass( {
    render: function() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
                <div className="container-fluid">  
                    <a href="/" className="navbar-brand">
                        <img style={{height:'50px', width:'50px'}} src="images/brand.png" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav> 
        );
    }
});

module.exports = Header;