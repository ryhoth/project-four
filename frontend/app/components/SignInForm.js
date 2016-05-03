import React, { Component } from 'react';

import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


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
          <Button type="submit">
            Sign In
          </Button>
        </Form>
    );
  }
}


export default SignInForm;
