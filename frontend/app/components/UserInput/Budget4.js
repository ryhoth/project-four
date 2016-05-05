import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Budget4 extends Component {


  render() {

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Capital Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>How much do you expect to spend on capital expenditure in year one?</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl name="rent" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                </InputGroup>
            </FormGroup>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.next}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Budget4;


// <FormGroup controlId="formControlsSelect">
//  <ControlLabel>Will this cost be recurring?</ControlLabel>
//  <FormControl componentClass="select" placeholder="select">
//    <option value="select">select</option>
//    <option value="yes">Yes</option>
//    <option value="yes">No</option>
//  </FormControl>
// </FormGroup>
// <FormGroup controlId="formControlsSelect">
//   <ControlLabel>If so, how many years?</ControlLabel>
//   <FormControl componentClass="select" placeholder="select">
//     <option value="select">select</option>
//     <option value="2">Second year</option>
//     <option value="3">Third year</option>
//   </FormControl>
// </FormGroup>
