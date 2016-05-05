import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Revenue6 extends Component {

//marketing questions
  render() {

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Revenue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>What is the probability that your {this.props.unitA} {this.props.eventB}ing at {this.props.mediumC} will make money?</ControlLabel>
              <InputGroup>
                <FormControl name="probOfB" type="text" placeholder="" onChange={this.props.onUpdate} />
                <InputGroup.Addon>%</InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.next}>Save and continue</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Revenue6;
