import React from 'react';
import './Posts.css';

const SocialButtons = props => {
  const likeClasses = ['likeBtn'];
  if (props.liked) {likeClasses.push('likedBtn')}
  return (
    <div className="socialButtons">
      <button className={likeClasses.join(' ')} onClick={props.togglePostLiked(props.postId)} ></button>
      <button className="commentBtn"></button>
    </div>
  )
}

export default SocialButtons;