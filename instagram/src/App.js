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
    this.state = {}
  }

  componentDidMount = () => {
    this.setState({posts: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          this.state.posts !== undefined ? 
            <Posts posts={this.state.posts} /> :
            "Loading"
        }
      </div>
    );
  }
}


export default App;
