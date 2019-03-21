import React from 'react';
import './SearchBar.css';


const SearchBar = props => (
  <div className="searchBar">
    <div className="searchBarContent">
      <div className="logoSection">
        <div className="logo"></div>
        <div className="divider"></div>
        <div className="companyName"></div>
      </div>
      <div className="searchBox">
        <input className="searchInput" placeholder="Search" name="searchInput" />
      </div>
      <div className="menu">
        <div className="exploreBtn"></div>
        <div className="activityBtn"></div>
        <div className="profileBtn"></div>
      </div>
    </div>
  </div>
);

export default SearchBar;