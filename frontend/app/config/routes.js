import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

// import all routes
import Main from '../containers/Main';
import App from '../containers/App';

import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

import ListDecks from '../containers/ListDecks';
import DeckContent from '../containers/DeckContent';
import AddEditDeck from '../containers/AddEditDeck';


// Note: In your topmost route, you need to pass a component (this.props.children)
// On the home page, it's the Login component; on the /products page, it's the Products component


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="Main/" component={Main}>
        <Route path="SignIn" component={SignIn}/>
        <Route path="SignUp" component={SignUp}/>
        <Route path="ListDecks" component={ListDecks}/>
        <Route path="DeckContent" component={DeckContent}/>
        <Route path="AddEditDeck" component={AddEditDeck}/>
      </Route>
    </Route>
  </Router>
);

export default routes;
