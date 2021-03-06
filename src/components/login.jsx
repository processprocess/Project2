// This file will handle the login component, this component will log a user into our firebase system

import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: 'NOPASSREQUIRED',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(`${username}@test.com`, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then(() => {
        this.props.router.push('/App')
        })
  }

  render() {
    return (
      <div className="RegisterOrLogin">
        <div>
          <h2>Systematic Graphic Generator</h2>
          <p>How might strings and numbers be manipulated in React?<br/></p>
          <input className="userNameForm" name="username" onChange={this.handleChange} type="text" placeholder="username" />
        </div>
        {/* <div>
          <input className="PasswordForm" name="password" onChange={this.handleChange} type="password" placeholder="password" />
        </div> */}
        <button className="btn" onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}

export default withRouter(Login)

// export default Login;
