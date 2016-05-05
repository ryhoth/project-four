import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Revenue12 extends Component {

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
              <ControlLabel>How much are you being paid per profitable {this.props.mediumC}?</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl name="dollarPerPofC" type="text" placeholder="" onChange={this.props.onUpdate} />
              </InputGroup>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.next}>Save and Continue</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Revenue12;
