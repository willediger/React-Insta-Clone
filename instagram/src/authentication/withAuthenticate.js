import React, { Component } from 'react';

const withAuthenticate = Posts => Login => class extends Component {
  render() {
    if (this.props.loggedInUser.length) {
      return <Posts {...this.props} />
    } else {
      return <Login {...this.props} />
    }
  }
}

export default withAuthenticate;