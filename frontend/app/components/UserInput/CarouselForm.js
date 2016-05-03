import React, { Component } from 'react';

import { Carousel, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Headcount2 from './Headcount2';


class CarouselForm extends Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <Headcount2 />
          <Carousel.Caption>
            <h3>First Employee</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Headcount2 />
          <Carousel.Caption>
            <h3>Second Employee</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


export default CarouselForm;
