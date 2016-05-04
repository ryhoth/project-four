import React, { Component } from 'react';

import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';
// import HeadcountForm from './HeadcountForm';

const Headcount2 = React.createClass({

  render () {
    return (
      <div>
        <br/>
        <br/>
        <form key={this.props.key}>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Employee's Name</ControlLabel>
            <FormControl type="text" name="employeeName" placeholder="Enter your employee's name" onChange={this.props.onUpdate} />
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Employee's Position</ControlLabel>
            <FormControl type="text" name="employeePosition" placeholder="Enter the employee's position" onChange={this.props.onUpdate} />
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Employee's Monthly Salary</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" name="employeeSalary" placeholder="Enter the employee's monthly salary in dollars" onChange={this.props.onUpdate} />
              </InputGroup>
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Employee's Bonus</ControlLabel>
              <InputGroup>
                <FormControl type="text" name="employeeBonus" placeholder="Enter the employee's yearly bonus percentage" onChange={this.props.onUpdate} />
                <InputGroup.Addon>%</InputGroup.Addon>
              </InputGroup>
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Employee's Equity</ControlLabel>
            <InputGroup>
              <FormControl type="text" name="employeeEquity" placeholder="Enter the employee's equity percentage" onChange={this.props.onUpdate} />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <Button onClick={this.props.next}>Save</Button>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
});


export default Headcount2;
