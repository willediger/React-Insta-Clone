import React from 'react';
import './Comments.css';
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
  }

  render() {
    return (
      <div className="comments">
        {this.state.comments.map(c => (
          <Comment comment={c} key={c.text} />
        ))}
      </div>
    );
  }
} 

export default Comments;