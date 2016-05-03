import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

import { Button, ButtonToolbar } from 'react-bootstrap';

import Navigation from '../components/Navigation';



class Main extends Component {
  render () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
