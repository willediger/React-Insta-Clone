import React from 'react';
import PropTypes from "prop-types";

import styled from "styled-components";

import './Posts.css';

import Post from './Post';

const PostsContainer = styled.div`
  max-width: 616px;
  margin-top: -2px;
  margin-bottom: 61px;
`

const Posts = props => (
  <PostsContainer>
    {props.posts.map(p => (
      <Post 
        post={p}
        key={p.username}
        addNewComment={props.addNewComment}
        loggedInUser={props.loggedInUser}
        togglePostLiked={props.togglePostLiked}
      />
    ))}
  </PostsContainer>
);


//example post
// {
//   username: "philzcoffee",
//   thumbnailUrl:
//     "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

//   imageUrl:
//     "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
//   likes: 400,
//   timestamp: "July 17th 2017, 12:42:40 pm",
//   comments: [
//     {
//       username: "philzcoffee",
//       text:
//         "We've got more than just delicious coffees to offer at our shops!"
//     },
//     {
//       username: "biancasaurus",
//       text: "Looks delicious!"
//     },
//     {
//       username: "martinseludo",
//       text: "Can't wait to try it!"
//     }
//   ]
// }

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }))
  }))
};

export default Posts;