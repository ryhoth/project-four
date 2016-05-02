import React, { Component } from 'react';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class SignUpForm extends Component {
  render () {
    return (
      <form>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Enter your name"/>
        </FormGroup>
        <FormGroup controlId="formControlsEmail">
          <ControlLabel>Email address</ControlLabel>
          <FormControl type="email" placeholder="email@example.com" />
        </FormGroup>
        <FormGroup controlId="formControlsPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" />
        </FormGroup>
        <FormGroup controlId="formControlsPassword">
          <ControlLabel>Confirm password</ControlLabel>
          <FormControl type="password" />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}


export default SignUpForm;
