import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Revenue2 extends Component {

//marketing questions
  render() {

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Revenue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>How many {this.props.unitA}s do you expect in:</ControlLabel>

                <FormGroup controlId="formControlsText">
                  <ControlLabel>January</ControlLabel>
                    <FormControl name="jan" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>February</ControlLabel>
                    <FormControl name="feb" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>March</ControlLabel>
                    <FormControl name="mar" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>April</ControlLabel>
                    <FormControl name="apr" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>May</ControlLabel>
                    <FormControl name="may" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>June</ControlLabel>
                    <FormControl name="jun" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>July</ControlLabel>
                    <FormControl name="jul" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>August</ControlLabel>
                    <FormControl name="aug" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>September</ControlLabel>
                    <FormControl name="sept" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>October</ControlLabel>
                    <FormControl name="oct" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>November</ControlLabel>
                    <FormControl name="nov" type="text" placeholder="" onChange={this.props.onUpdate} />
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>December</ControlLabel>
                    <FormControl name="dec" type="text" placeholder="" onChange={this.props.onUpdate} />
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

export default Revenue2;
