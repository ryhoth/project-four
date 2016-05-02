import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import { Button } from 'react-bootstrap';



class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Fox Deck</h1><br/>
        <Link to={'/SignUp'}>SignUp</Link><br/>
        <SignUpForm /><br/><br/><hr/>
        <Link to={'/SignIn'}>SignIn</Link><br/>
        <SignInForm /><br/><br/><hr/>
      </div>
    );
  }
}

export default Welcome;
