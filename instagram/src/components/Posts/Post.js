import React from 'react';
import './Posts.css';
import moment from 'moment'

import styled, { css } from "styled-components";

import Comments from '../Comments/Comments';
import SocialButtons from './SocialButtons'
import UserName from '../Styles/Reuseable/UserName'

const PostContainer = styled.div`
  margin-top: 61px;
  border: 1px solid #E6E6E6;
  background-color: white;
  ${props => 
    props.filtered &&
    css`
      display: none;
    `
  }
`

const PostImg = styled.img`
  max-width: 100%;
`

const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #EFEFEF;
  height: 61px;
  padding-left: 17px;
`

const PosterThumbnail = styled.img`
  border-radius: 50%;
  height: 30px;
  margin-right: 13px;
`

const PostMetaDataContainer = styled.div`
  margin-left: 16px;
  margin-top: 10px;
  margin-right: 16px;
`

const LikesCount = styled(UserName)`
  margin-top: 9px;
`

const PostAge = styled.p`
  font-size: 1rem;
  color: #999;
  padding-top: 11px;
  padding-bottom: 12px;
`

const AddCommentForm = styled.form`
  border-top: 1px solid #efefef;
  padding-top: 19px;
  padding-bottom: 18px;
`

const AddCommentFormInput = styled.input`
  background: 0 0;
  border: 0;
  color: #262626;
  height: 18px;
  outline: 0;
  padding: 0;
  line-height: 18px;
  width: 100%;
  margin: 0;
`

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentToAdd: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({commentToAdd: e.target.value})
  }

  addNewComment = (postId, loggedInUser) => event => {
    event.preventDefault();
    this.props.addNewComment(postId, this.state.commentToAdd, loggedInUser);
    this.setState({commentToAdd: ''});
  }

  render() {
    const p = this.props.post;
    return (
      <PostContainer filtered={p.filtered}>
        <PostHeader>
          <PosterThumbnail
            src={p.thumbnailUrl}
            alt={p.timestamp}
          />
          <UserName>{p.username}</UserName>
        </PostHeader>
        <PostImg src={p.imageUrl} alt={p.timestamp} />
        <PostMetaDataContainer>
          <SocialButtons
            liked={p.liked}
            postId={p.id}
            togglePostLiked={this.props.togglePostLiked}
          />
          <LikesCount>{p.likes} likes</LikesCount>
          <Comments comments={p.comments} />
          <PostAge>
            {moment(p.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}
          </PostAge>
          <AddCommentForm 
            onSubmit={this.addNewComment(p.id, this.props.loggedInUser)}
            autocomplete="off"
          >
            <AddCommentFormInput 
              name="addComment"
              value={this.state.commentToAdd}
              placeholder="Add a comment..." 
              onChange={this.inputChangeHandler}
            />
          </AddCommentForm>
        </PostMetaDataContainer>
      </PostContainer>
    )
  }
}

export default Post;