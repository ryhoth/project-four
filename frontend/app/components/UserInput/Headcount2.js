import React, { Component } from 'react';

import { FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';


class Headcount2 extends Component {
  render () {
    return (
      <form>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Employee's Name</ControlLabel>
          <FormControl type="text" placeholder="Enter your employee's name" />
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Employee's Position</ControlLabel>
          <FormControl type="text" placeholder="Enter the employee's position" />
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Employee's Monthly Salary</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text" placeholder="Enter the employee's monthly salary in dollars" />
            </InputGroup>
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Employee's Bonus</ControlLabel>
            <InputGroup>
              <FormControl type="text" placeholder="Enter the employee's yearly bonus percentage" />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Employee's Equity</ControlLabel>
          <InputGroup>
            <FormControl type="text" placeholder="Enter the employee's equity percentage" />
            <InputGroup.Addon>%</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Button type="submit">
          Save and continue
        </Button>
      </form>
    );
  }
}


export default Headcount2;
