import React from 'react';
import './Posts.css';

import Comments from '../Comments/Comments';
import SocialButtons from './SocialButtons'

const Post = props => {
  const p = props.post;
  return (
    <div className="post">
      <div className="post-header">
        <img src={p.thumbnailUrl} alt={p.timestamp} className="thumbnail" />
        <p className="username">{p.username}</p>
      </div>
      <img src={p.imageUrl} alt={p.timestamp} className="post-img" />
      <SocialButtons />
      <Comments comments={p.comments} />
    </div>
  )
}

export default Post;