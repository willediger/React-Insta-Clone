import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  
  inputChangeHandler = e => {
    e.preventDefault();
    this.setState({search: e.target.value})
    if (e.target.value.length) {
      this.props.search(e.target.value)
    } else {
      this.props.clearSearch();
    }
  }

  clearSearch = e => {
    e.preventDefault();
    this.setState({search: ''})
    this.props.clearSearch();
  }

  render() {
    const searchBoxClasses = ['searchBox']
    if (!this.state.search.length) {
      searchBoxClasses.push('noSearchEntered')
    }
    return (
      <div className="searchBar">
        <div className="searchBarContent">
          <div className="logoSection">
            <div className="logo"></div>
            <div className="divider"></div>
            <div className="companyName"></div>
          </div>
          <div className={searchBoxClasses.join(' ')}>
            <input 
              className="searchInput"
              placeholder="Search"
              name="searchInput"
              onChange={this.inputChangeHandler} 
              value={this.state.search}
            />
            <button className='clearSearchBtn' onClick={this.clearSearch}></button>
          </div>
          <div className="menu">
            <div className="exploreBtn"></div>
            <div className="activityBtn"></div>
            <div className="profileBtn" onClick={this.props.logout}></div>
          </div>
        </div>
      </div>
    );
  } 
}

export default SearchBar;