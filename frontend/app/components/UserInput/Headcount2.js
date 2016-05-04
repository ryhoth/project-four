import React, { Component } from 'react';

import { Modal, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';


const Headcount2 = React.createClass ({

  render () {
    // let formzzz = []
    //
    //
    //  formzzz.push(for (let i = 0; i < this.props.employeeCount; i ++){
    //   <form>
    //     <FormGroup controlId="formControlsText">
    //       <ControlLabel>Employee's Name</ControlLabel>
    //       <FormControl type="text" name="employeeName" placeholder="Enter your employee's name" onChange={this.props.onUpdate} />
    //     </FormGroup>
    //     <FormGroup controlId="formControlsText">
    //       <ControlLabel>Employee's Position</ControlLabel>
    //       <FormControl type="text" name="employeePosition" placeholder="Enter the employee's position" onChange={this.props.onUpdate} />
    //     </FormGroup>
    //     <FormGroup controlId="formControlsText">
    //       <ControlLabel>Employee's Monthly Salary</ControlLabel>
    //       <InputGroup>
    //         <InputGroup.Addon>$</InputGroup.Addon>
    //           <FormControl type="text" name="employeeSalary" placeholder="Enter the employee's monthly salary in dollars" onChange={this.props.onUpdate} />
    //         </InputGroup>
    //     </FormGroup>
    //     <FormGroup controlId="formControlsText">
    //       <ControlLabel>Employee's Bonus</ControlLabel>
    //         <InputGroup>
    //           <FormControl type="text" name="employeeBonus" placeholder="Enter the employee's yearly bonus percentage" onChange={this.props.onUpdate} />
    //           <InputGroup.Addon>%</InputGroup.Addon>
    //         </InputGroup>
    //     </FormGroup>
    //     <FormGroup controlId="formControlsText">
    //       <ControlLabel>Employee's Equity</ControlLabel>
    //       <InputGroup>
    //         <FormControl type="text" name="employeeEquity" placeholder="Enter the employee's equity percentage" onChange={this.props.onUpdate} />
    //         <InputGroup.Addon>%</InputGroup.Addon>
    //       </InputGroup>
    //     </FormGroup>
    //   </form>
    // })

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Employee Questionaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.travis}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.next}>Save and continue</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


export default Headcount2;


//
// <form>
//   <FormGroup controlId="formControlsText">
//     <ControlLabel>Employee's Name</ControlLabel>
//     <FormControl type="text" name="employeeName" placeholder="Enter your employee's name" onChange={this.props.onUpdate} />
//   </FormGroup>
//   <FormGroup controlId="formControlsText">
//     <ControlLabel>Employee's Position</ControlLabel>
//     <FormControl type="text" name="employeePosition" placeholder="Enter the employee's position" onChange={this.props.onUpdate} />
//   </FormGroup>
//   <FormGroup controlId="formControlsText">
//     <ControlLabel>Employee's Monthly Salary</ControlLabel>
//     <InputGroup>
//       <InputGroup.Addon>$</InputGroup.Addon>
//         <FormControl type="text" name="employeeSalary" placeholder="Enter the employee's monthly salary in dollars" onChange={this.props.onUpdate} />
//       </InputGroup>
//   </FormGroup>
//   <FormGroup controlId="formControlsText">
//     <ControlLabel>Employee's Bonus</ControlLabel>
//       <InputGroup>
//         <FormControl type="text" name="employeeBonus" placeholder="Enter the employee's yearly bonus percentage" onChange={this.props.onUpdate} />
//         <InputGroup.Addon>%</InputGroup.Addon>
//       </InputGroup>
//   </FormGroup>
//   <FormGroup controlId="formControlsText">
//     <ControlLabel>Employee's Equity</ControlLabel>
//     <InputGroup>
//       <FormControl type="text" name="employeeEquity" placeholder="Enter the employee's equity percentage" onChange={this.props.onUpdate} />
//       <InputGroup.Addon>%</InputGroup.Addon>
//     </InputGroup>
//   </FormGroup>
// </form>




// <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
//   <Modal.Header closeButton>
//     <Modal.Title id="contained-modal-title-lg">Employee Questionaire</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//       <form>
//         <FormGroup controlId="formControlsText">
//           <ControlLabel>Employee's Name</ControlLabel>
//           <FormControl type="text" name="employeeName" placeholder="Enter your employee's name" onChange={this.props.onUpdate} />
//         </FormGroup>
//         <FormGroup controlId="formControlsText">
//           <ControlLabel>Employee's Position</ControlLabel>
//           <FormControl type="text" name="employeePosition" placeholder="Enter the employee's position" onChange={this.props.onUpdate} />
//         </FormGroup>
//         <FormGroup controlId="formControlsText">
//           <ControlLabel>Employee's Monthly Salary</ControlLabel>
//           <InputGroup>
//             <InputGroup.Addon>$</InputGroup.Addon>
//               <FormControl type="text" name="employeeSalary" placeholder="Enter the employee's monthly salary in dollars" onChange={this.props.onUpdate} />
//             </InputGroup>
//         </FormGroup>
//         <FormGroup controlId="formControlsText">
//           <ControlLabel>Employee's Bonus</ControlLabel>
//             <InputGroup>
//               <FormControl type="text" name="employeeBonus" placeholder="Enter the employee's yearly bonus percentage" onChange={this.props.onUpdate} />
//               <InputGroup.Addon>%</InputGroup.Addon>
//             </InputGroup>
//         </FormGroup>
//         <FormGroup controlId="formControlsText">
//           <ControlLabel>Employee's Equity</ControlLabel>
//           <InputGroup>
//             <FormControl type="text" name="employeeEquity" placeholder="Enter the employee's equity percentage" onChange={this.props.onUpdate} />
//             <InputGroup.Addon>%</InputGroup.Addon>
//           </InputGroup>
//         </FormGroup>
//       </form>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button onClick={this.props.next}>Save and continue</Button>
//   </Modal.Footer>
// </Modal>
