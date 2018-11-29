import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
var SearchContainer = (props) => {
    console.log(" *** *** ***");
    console.log("%cSEARCH CONTAINER", "font-size:14px; color:violet");
    console.log(" *** *** ***");
    return (<handleSearchChange />);
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
