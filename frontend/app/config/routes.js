import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

// import all routes
import Main from '../containers/Main';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import ListDecks from '../containers/ListDecks';
import DeckContent from '../containers/DeckContent';
import AddEditDeck from '../containers/AddEditDeck';
import About from '../containers/About';

import Welcome from '../components/Welcome';






const Routes = (
  <Router history={browserHistory}>

    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
      <Route path="About" component={About} />
      <Route path="SignIn" component={SignIn} />
      <Route path="SignUp" component={SignUp} />
      <Route path="ListDecks" component={ListDecks} >
        <Route path="NewDeck" component={AddEditDeck} />
        <Route path="EditDeck" component={AddEditDeck} />
        <Route path="DeckContent" component={DeckContent} />
      </Route>


    </Route>
  </Router>
);

export default Routes;
