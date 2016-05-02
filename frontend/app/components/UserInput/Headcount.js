import React, { Component } from 'react';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class Headcount extends Component {
  render () {
    return (
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>How many employees will there be including yourself?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">1</option>
            <option value="other">2</option>
            <option value="other">3</option>
            <option value="other">4</option>
            <option value="other">5</option>
            <option value="other">6</option>
            <option value="other">7</option>
            <option value="other">8</option>
            <option value="other">9</option>
            <option value="other">10</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>How much do you expect to pay in taxes on employee benefits?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">9%</option>
            <option value="other">11%</option>
            <option value="other">15%</option>
            <option value="other">17%</option>
          </FormControl>
        </FormGroup>
        <Button type="submit">
          Save and continue
        </Button>
      </form>
    );
  }
}


export default Headcount;
