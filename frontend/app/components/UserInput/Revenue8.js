import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Revenue10 extends Component {

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
              <ControlLabel>How much will you be paid per profitable {this.props.eventB}?</ControlLabel>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>January</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="jan" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>February</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="feb" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>March</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="mar" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>April</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="apr" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>May</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="may" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>June</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="jun" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>July</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="jul" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>August</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="aug" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>September</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="sept" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>October</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="oct" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>November</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="nov" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>December</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl name="dec" type="text" placeholder="" onChange={this.props.onUpdate} />
                  </InputGroup>
                </FormGroup>
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

export default Revenue10;
