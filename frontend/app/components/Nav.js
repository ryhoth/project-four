import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

import Main from '../containers/Main';
import Welcome from '../components/Welcome';

import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

import ListDecks from '../containers/ListDecks';
import DeckContent from '../containers/DeckContent';
import AddEditDeck from '../containers/AddEditDeck';

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li><Link to={'/ListDecks'}>ListDecks</Link></li>
          <li><Link to={'/AddEditDeck'}>AddEDeck</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
