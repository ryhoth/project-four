import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { NavItemLink } from 'react-router-bootstrap';


import Main from '../containers/Main';
import Welcome from '../components/Welcome';

import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

import ListDecks from '../containers/ListDecks';
import DeckContent from '../containers/DeckContent';
import AddEditDeck from '../containers/AddEditDeck';

import { Nav, Navbar, NavItem, NavDropdown, DropdownButton} from 'react-bootstrap';

class NaviBar extends Component {
  render() {
    return (
      <Navbar fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Fox Deck</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <Navbar.Brand>
            <Link to={'/ListDecks'}>List Decks</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to={'/ListDecks/NewDeck'}>New Deck</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to={'/ListDecks/DeckContent'}>Deck Content</Link>
          </Navbar.Brand>
        </Nav>
        <Nav pullRight>
          <Navbar.Brand>
            <Link to={'/About'}>About</Link>
          </Navbar.Brand>
        </Nav>
      </Navbar>
    );
  }
}

export default NaviBar;
