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

  searchPosters = search => {
    console.log(search)
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(el => {
          if (!el.username.includes(search)) {
            return {
              ...el,
              filtered: true
            }
          } else {
            return {
              ...el,
              filtered: false
            }
          }
        })
      }
    });
  }

  clearSearchFilter = () => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(el => {
          return {
            ...el,
            filtered: false
          }
        })
      }
    });
  }


  nextCommentId = posts => {
    // from posts, grabs each comments array, then grabs only id's of comments, then flattens array, then grabs max of id's
    const nextId = Math.max(...posts.map(p => p.comments.map(c => Number.parseInt(c.id))).flat()) + 1;
    return nextId.toString();
  }
  
  addNewComment = (postId, comment, username) => {
    this.setState(prevState => {
      let newPosts = prevState.posts;
      let nextCommentId = this.nextCommentId(newPosts);
      const postIdx = newPosts.findIndex(p => p.id === postId);
      newPosts[postIdx].comments.push({id: nextCommentId, username: username, text: comment})
      return {
        posts: newPosts
      }
    })
  }

  togglePostLiked = postId => event => {
    event.preventDefault();
    this.setState(prevState => {
      let newPosts = prevState.posts;
      const postIdx = newPosts.findIndex(p => p.id === postId);
      newPosts[postIdx].liked = !newPosts[postIdx].liked;
      if (newPosts[postIdx].liked) {
        newPosts[postIdx].likes++
      } else {
        newPosts[postIdx].likes--
      }
      return {
        posts: newPosts
      }
    })
  }

  setInitialMetaData = () => {
    this.setState(prevState => {
      let newPosts = prevState.posts;
      newPosts.forEach(p => p.liked = false)
      newPosts.forEach(p => p.filtered = false)
      return {posts: newPosts}
    })
  }

  componentDidMount = () => {
    this.setState(
      {
        posts: dummyData,
        loggedInUser: 'dummyUser'
      }, () => {
        this.setInitialMetaData();
      }
      //testing whether adding a new comment works
      // () => {this.addNewComment("a", "mic check 1 2 1 2", "dummy")}
    );
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchPosters} clearSearch={this.clearSearchFilter} />
        <main>
          {
            this.state.posts !== undefined ? 
              <Posts posts={this.state.posts} addNewComment={this.addNewComment} loggedInUser={this.state.loggedInUser} togglePostLiked={this.togglePostLiked} /> :
              "Loading"
          }
          <div className="sidebar"></div>
        </main>
      </div>
    );
  }
}


export default App;
