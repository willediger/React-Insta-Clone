import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar'
import Posts from './components/Posts/Posts'

import dummyData from './dummy-data'

// go here for guide on how to utilize reactstrap
// https://github.com/reactstrap/reactstrap

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
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
