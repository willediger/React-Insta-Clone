import React from 'react';

import CommentUserName from '../Styles/Reuseable/CommentUserName'


import styled from "styled-components";

const CommentContainer = styled.div`
  margin-top: 10px;
  max-width: 582px;
`

const CommentText = styled.span`
  margin-left: 7px;
`

const Comment = props => (
  <CommentContainer>
    <p>
      <CommentUserName>{props.comment.username}</CommentUserName>
      <CommentText>{props.comment.text}</CommentText>
    </p>
  </CommentContainer>
);

export default Comment;