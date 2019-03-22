import React from 'react';
import './Comments.css';

import CommentUserName from '../Styles/Reuseable/CommentUserName'

const Comment = props => (
  <div className="comment">
    <p>
      <CommentUserName>{props.comment.username}</CommentUserName>
      <span className="comment-text">{props.comment.text}</span>
    </p>
  </div>
);

export default Comment;