import React, { Component } from 'react';

import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';


const Headcount3 = React.createClass ({
  render () {
    return (
            <form>
              <p><b>Employee: {this.props.count}</b></p>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" name="employeeName" placeholder="Enter your employee's name" onChange={this.props.onUpdate} />
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Position</ControlLabel>
                <FormControl type="text" name="employeePosition" placeholder="Enter the employee's position" onChange={this.props.onUpdate} />
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Monthly Salary</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl type="text" name="employeeSalary" placeholder="Enter the employee's monthly salary in dollars" onChange={this.props.onUpdate} />
                  </InputGroup>
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Bonus</ControlLabel>
                  <InputGroup>
                    <FormControl type="text" name="employeeBonus" placeholder="Enter the employee's yearly bonus percentage" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Equity</ControlLabel>
                <InputGroup>
                  <FormControl type="text" name="employeeEquity" placeholder="Enter the employee's equity percentage" onChange={this.props.onUpdate} />
                  <InputGroup.Addon>%</InputGroup.Addon>
                </InputGroup>
              </FormGroup>
              <br/><hr/>
            </form>
    );
  }
});


export default Headcount3;
