import React from 'react';
import './SearchBar.css';


const SearchBar = props => (
  <div className="searchBar">
    <div className="logo"></div>
    <div className="divider"></div>
    <div className="companyName"></div>
    <input className="searchBox" placeholder="Search" />
    <div className="exploreBtn"></div>
    <div className="activityBtn"></div>
    <div className="profileBtn"></div>
  </div>
);

export default SearchBar;