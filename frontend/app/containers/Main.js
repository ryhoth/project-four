import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';


class Main extends Component {
  render () {
    return (
      <div>
        <Welcome />
        <li><Link to={'/Main/SignIn'}>Sign In</Link></li>
        <li><Link to={'/Main/SignUp'}>Sign Up</Link></li>
        <li><Link to={'/Main/DeckContent'}>Deck</Link></li>
      </div>
    );
  }
}


export default Main;
