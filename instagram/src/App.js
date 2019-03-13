import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar'
import Posts from './components/Posts/Posts'

import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts />
      </div>
    );
  }
}

export default App;
