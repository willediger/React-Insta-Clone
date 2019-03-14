import React from 'react';
import './Posts.css';

import Post from './Post';

const Posts = props => (
  <div className="posts">
    {props.posts.map(p => (
      <Post post={p} />
    ))}
  </div>
);

export default Posts;