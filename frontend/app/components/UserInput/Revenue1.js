import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';

class ListDecks extends Component {

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
              <ControlLabel>What is your possible unit of business?</ControlLabel>
              <FormControl name="unitOfBusiness" type="text" placeholder="Foxes, site visitors, subscribers..." onChange={this.props.onUpdate} />
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

export default ListDecks;




// Revenue: Fox fall in the field and fall into a trap.
// Traffic already there (foxes)
// How many fields visited by traffic unit? A
// What percent of fields have traps in them? % B
// How much of field visitors fall into trap? C
// How much in pure revenue will [business name] get paid per trap? A * B * C
// Prime metric!: revenue per field visits
//
// How much will you pay to generate the [year one amount] of foxes? A
// How much will you pay to generate the [year one amount] of field visits? B
//
// 3 metrics:
// 1. C = A*B = paid field visits (This is how much you paid for visits)
// 2. % paid: C / [year one amount] of foxes
// 3. % free: 1 - (% paid)
