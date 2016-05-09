import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Revenue7 extends Component {

//marketing questions
  render() {
//percOfC
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Revenue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>What percentage of the {this.props.mediumC} will lead to a profitable {this.props.eventB}?</ControlLabel>

                <FormGroup controlId="formControlsText">
                  <ControlLabel>January</ControlLabel>
                  <InputGroup>
                    <FormControl name="jan" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>February</ControlLabel>
                  <InputGroup>
                    <FormControl name="feb" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>March</ControlLabel>
                  <InputGroup>
                    <FormControl name="mar" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>April</ControlLabel>
                  <InputGroup>
                    <FormControl name="apr" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>May</ControlLabel>
                  <InputGroup>
                    <FormControl name="may" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>June</ControlLabel>
                  <InputGroup>
                    <FormControl name="jun" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>July</ControlLabel>
                  <InputGroup>
                    <FormControl name="jul" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>August</ControlLabel>
                  <InputGroup>
                    <FormControl name="aug" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>September</ControlLabel>
                  <InputGroup>
                    <FormControl name="sept" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>October</ControlLabel>
                  <InputGroup>
                    <FormControl name="oct" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>November</ControlLabel>
                  <InputGroup>
                    <FormControl name="nov" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>December</ControlLabel>
                  <InputGroup>
                    <FormControl name="dec" type="text" placeholder="" onChange={this.props.onUpdate} />
                    <InputGroup.Addon>%</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>

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

export default Revenue7;
