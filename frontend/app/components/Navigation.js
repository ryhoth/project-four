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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Fox Deck</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>Link1</NavItem>
          <NavItem eventKey={2}>Link2</NavItem>
          <NavItem eventKey={3}>Link3</NavItem>
          <Link to={'/ListDecks'}>List Decks</Link>
          <Link to={'/AddEditDeck'}>Add Deck</Link>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">About</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NaviBar;
