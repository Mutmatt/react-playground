"use strict";

var React = require('react');
var CreateClass = require('create-react-class');
var AuthorApi = require('../../api/authorApi');


var Authors = CreateClass( {
    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentWillMount: function() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    },


    render: function() {
        var createAuthorRow = function(author) {
            return ( 
                <tr key={author.id}>
                    <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>

        );
    }
});

module.exports = Authors;