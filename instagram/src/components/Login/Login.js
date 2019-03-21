import React from 'react';
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className="login">
        <div className="logo"></div>
        <form onSubmit={this.login}>
          <input 
            className="usernameInput"
            placeholder="username"
            name="username"
            onChange={this.inputHandler} 
            value={this.state.username}
          />
          <input 
            className="passwordInput"
            placeholder="password"
            name="password"
            onChange={this.inputHandler} 
            value={this.state.password}
            type="password"
            autoComplete="current-password"
          />
          <button type="submit" className="loginBtn">Log in</button>
        </form>
      </div>
    );
  } 
}

export default Login;