import React from 'react';
import './Comments.css';
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="comments">
        {this.props.comments.map(c => (
          <Comment comment={c} key={c.text} />
        ))}
      </div>
    );
  }
} 

export default Comments;