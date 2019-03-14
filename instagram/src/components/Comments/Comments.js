import React from 'react';
import './Comments.css';
import Comment from './Comment'

const Comments = props => (
  <div className="comments">
    {props.comments.map(c => (
      <Comment comment={c} key={c.text} />
    ))}
    <input placeholder="Add comment" />
  </div>
);

export default Comments;