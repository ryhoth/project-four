import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import { Jumbotron, Button, PageHeader } from 'react-bootstrap';



class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <PageHeader>Welcome to Fox Deck</PageHeader>
          <p>A quick and simple way for entrepreneurs to generate financial projections for their business idea.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron><br/>
        <Link to={'/SignUp'}>SignUp</Link><br/>
        <SignUpForm /><br/><br/><hr/>
        <Link to={'/SignIn'}>SignIn</Link><br/>
        <SignInForm /><br/><br/><hr/>
      </div>
    );
  }
}

export default Welcome;
