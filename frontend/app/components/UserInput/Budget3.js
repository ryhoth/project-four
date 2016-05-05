import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Budget3 extends Component {


  render() {

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Operations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>How much do you expect to spend per month on:</ControlLabel>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Rent</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="rent" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Office Internet</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="internet" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>SaaS</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="saas" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Software License</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="softwareLicense" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Equipment</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="equipment" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Office Supplies</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="officeSupplies" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Travel</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="travel" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Conference and Trade Shows</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="ConfTrade" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Dues and Subscriptions</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="duesAndSubscription" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Insurance</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="insurance" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Petty Cash and Entertainment</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="pettyCash" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
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

export default Budget3;
