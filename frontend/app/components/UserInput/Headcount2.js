import React, { Component } from 'react';

import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';


const Headcount2 = React.createClass ({

  render () {

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Employee Questionaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.empQuestForms}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.next}>Save and continue</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


export default Headcount2;
