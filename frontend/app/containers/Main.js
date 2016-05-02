import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Main extends Component {
  render () {
    return (
      <div>
        <Welcome />
        <ButtonToolbar>
          <Button bsSize="large"><Link to={'/Main/SignIn'}>Sign In</Link></Button>
          <Button bsSize="large"><Link to={'/Main/SignUp'}>Sign Up</Link></Button>
          <Button bsSize="large"><Link to={'/Main/DeckContent'}>Deck</Link></Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
      </div>
    );
  }
}


export default Main;
