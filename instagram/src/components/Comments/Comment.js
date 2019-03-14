import React from 'react';
import './Comments.css';

const Comment = props => (
  <div className="comment">
    <p>
      <span className="comment-username">{props.comment.username}</span>
      <span className="comment-text">{props.comment.text}</span>
    </p>
  </div>
);

export default Comment;