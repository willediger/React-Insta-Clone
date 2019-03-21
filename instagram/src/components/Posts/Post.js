import React from 'react';
import './Posts.css';
import moment from 'moment'

import Comments from '../Comments/Comments';
import SocialButtons from './SocialButtons'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentToAdd: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({commentToAdd: e.target.value})
  }

  addComment = e => {

  }

  render() {
    const p = this.props.post;
    return (
      <div className="post">
        <div className="post-header">
          <img src={p.thumbnailUrl} alt={p.timestamp} className="thumbnail" />
          <p className="username">{p.username}</p>
        </div>
        <img src={p.imageUrl} alt={p.timestamp} className="post-img" />
        <div className="postMetaData">
          <SocialButtons />
          <p className="likesCount">{p.likes} likes</p>
          <Comments comments={p.comments} />
          <p className="postAge">{moment(p.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
          <form onSubmit={this.addComment} className="addComment">
            <input 
              name="addComment"
              value={this.state.commentToAdd}
              placeholder="Add Comment" 
              onChange={this.inputChangeHandler}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Post;