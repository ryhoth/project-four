import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import { Jumbotron, Button, PageHeader, Grid } from 'react-bootstrap';



class Welcome extends Component {
  render() {
    return (
      <Grid fluid>
        <Jumbotron>
          <PageHeader>Welcome to Fox Deck</PageHeader>
          <p>A quick and simple way for entrepreneurs to generate financial projections for their business ideas.</p>
          <p><Button bsStyle="info"><Link to={'/About'}>Learn more</Link></Button></p>
        </Jumbotron><br/>
      </Grid>
    );
  }
}

export default Welcome;
