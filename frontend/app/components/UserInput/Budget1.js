import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class Budget1 extends Component {

  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Consultants</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>How much do you expect to spend per month on:</ControlLabel>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Finance</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="finance" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Legal</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="legal" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Tech</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="tech" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Content & Editorial</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="contentEditorial" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Design</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="design" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Marketing</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="marketing" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsText">
                  <ControlLabel>Other</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="other" type="text" placeholder="Enter text" onChange={this.props.onUpdate} />
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

export default Budget1;

// Budget:
// Consultants: How do you expect to spend per year on {finance, legal, tech, content & editorial, design, marketing, other}?
// Marketing: How much will you spend on marketing in year (i)? (per unit of business "user", later correlate with demand)
// Operations: How do you expect to spend per month on {hosting, phone, rent, office internet, saas, software license, equipment,  office supplies, travel, conference and trade shows, dues and subscription, insurance, petty cash/entertainment}
// Capital Expenses: How much will you spend in the first year? Is this recurring? What years [form]?
// Traffic (assumed to be traffic based business): Plug in how many users you assume to gain in year (i). Form [traffic years]
//
// fox: visitor
// field visit:  page view
// trap: click on ad
