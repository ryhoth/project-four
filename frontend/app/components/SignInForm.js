import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import AddEditDeck from '../containers/AddEditDeck';


class SignInForm extends Component {
  render () {
    return (
      <Form inline>
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email address</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="john.smith@example.com" />
          </FormGroup>
          {' '}
          <FormGroup controlId="formControlsPassword">
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl type="password" />
          </FormGroup>
          {' '}
          <Button type="submit"><Link to={'/NewDeck'}>Sign In</Link></Button>
        </Form>
    );
  }
}


export default SignInForm;
