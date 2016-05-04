import React, { Component } from 'react';

import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


const Headcount = React.createClass({
  render () {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Employee Questionnaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>How many employees will there be including yourself?</ControlLabel>
              <FormControl name="employeeCount" componentClass="select" placeholder="select" onChange={this.props.onUpdate}>
                <option value="select">select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>How much do you expect to pay in taxes on employee benefits?</ControlLabel>
              <FormControl name="employeeTaxBenefits" componentClass="select" placeholder="select" onChange={this.props.onUpdate}>
                <option value="select">select</option>
                <option value="9">9%</option>
                <option value="11">11%</option>
                <option value="15">15%</option>
                <option value="17">17%</option>
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.next}>Save and continue</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


export default Headcount;
