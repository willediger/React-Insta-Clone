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

  addNewComment = (postId, loggedInUser) => event => {
    event.preventDefault();
    this.props.addNewComment(postId, this.state.commentToAdd, loggedInUser);
    this.setState({commentToAdd: ''});
  }

  render() {
    const p = this.props.post;
    const postClasses = ['post']
    if (p.filtered) {postClasses.push('filtered')}
    return (
      <div className={postClasses.join(' ')}>
        <div className="post-header">
          <img src={p.thumbnailUrl} alt={p.timestamp} className="thumbnail" />
          <p className="username">{p.username}</p>
        </div>
        <img src={p.imageUrl} alt={p.timestamp} className="post-img" />
        <div className="postMetaData">
          <SocialButtons liked={p.liked} postId={p.id} togglePostLiked={this.props.togglePostLiked} />
          <p className="likesCount">{p.likes} likes</p>
          <Comments comments={p.comments} />
          <p className="postAge">{moment(p.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>
          <form onSubmit={this.addNewComment(p.id, this.props.loggedInUser)} className="addComment">
            <input 
              name="addComment"
              value={this.state.commentToAdd}
              placeholder="Add a comment..." 
              onChange={this.inputChangeHandler}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Post;