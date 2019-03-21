import React from 'react';
import './Comments.css';
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentToAdd: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({commentToAdd: e.target.value})
  }

  addComment = e => {

  }

  render() { 
    return (
      <div className="comments">
        {this.props.comments.map(c => (
          <Comment comment={c} key={c.text} />
        ))}
        
        <form onSubmit={this.addComment} className="addComment">
          <input 
            name="addComment"
            value={this.state.commentToAdd}
            placeholder="Add Comment" 
            onChange={this.inputChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default Comments;