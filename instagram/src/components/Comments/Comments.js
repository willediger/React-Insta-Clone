import React from 'react';
import Comment from './Comment'

import styled from "styled-components";

const CommentsContainer = styled.div`
  margin-top: 2px;
`

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
  }

  render() {
    return (
      <CommentsContainer>
        {this.state.comments.map(c => (
          <Comment comment={c} key={c.text} />
        ))}
      </CommentsContainer>
    );
  }
} 

export default Comments;