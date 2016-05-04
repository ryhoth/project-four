import React, { Component } from 'react';
import Headcount from '../components/UserInput/Headcount'
import Headcount2 from '../components/UserInput/Headcount2'
import Headcount3 from '../components/UserInput/Headcount2body'

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

const AddEditDeck = React.createClass({
  getInitialState() {
    return {
      empOneShow: false,
      empTwoShow: false,
      employeeCount: null,
      employeeTaxBenefits: null,
      employeeName: null,
      employeePosition: null,
      employeeSalary: null,
      employeeBonus: null,
      employeeEquity: null
    };
  },

// swtich statement to grave the values from the form and set the state in this container
  handleFormState: function (e) {
    switch (e.target.name) {
      case "employeeCount":
        this.setState({
          employeeCount: e.target.value
        })
        // console.log("current state:",this.state)
        break;
      case "employeeTaxBenefits":
        this.setState({
          employeeTaxBenefits: e.target.value
        })
        // console.log("current state:",this.state)
        break;
      case "employeeName":
        this.setState({
          employeeName: e.target.value
        })
        // console.log("current state:",this.state)
        break;
      case "employeePosition":
        this.setState({
          employeePosition: e.target.value
        })
        // console.log("current state:",this.state)
        break;
      case "employeeSalary":
        this.setState({
          employeeSalary: e.target.value
        })
        // console.log("current state:",this.state)
        break;
      case "employeeBonus":
        this.setState({
          employeeBonus: e.target.value
        })
        // console.log("current state:",this.state)
        break;
      case "employeeEquity":
        this.setState({
          employeeEquity: e.target.value
        })
        // console.log("current state:",this.state)
        break;
    };
  },

  employeeInfo: [],

  saveEmployees: function () {
    this.employeeInfo.push({
      employeeName: this.state.employeeName,
      employeePosition: this.state.employeePosition,
      employeeSalary: this.state.employeeSalary,
      employeeBonus: this.state.employeeBonus,
      employeeEquity: this.state.employeeEquity
    });
    console.log("employeeInfo: ",this.employeeInfo);
  },

  array: [],


    render() {
      // let empOneClose = () => this.setState({ empOneShow: false });
      let empTwoClose = () => {
        this.setState({ empTwoShow: false });
        // console.log("current state:",this.state);
        this.saveEmployees()
      }
      // let headOneOpen = () => this.setState({ empOneShow: true });
      // let headTwoOpen = () => this.setState({ empTwoShow: true });
      let onToEmployees = () => {
        this.setState({ empOneShow: false, empTwoShow: true })
        // console.log("current state:",this.state)
        employeeForms();
      }
      let nextEmployee = () => {
        this.setState({ empTwoShow: false, empTwoShow: true })
        // clear headcount 2
        this.saveEmployees();
      }

      let employeeForms = () => {
        if (this.state.employeeCount) {
            for (let i = 0; i < this.state.employeeCount; i++){
                this.array.push(<Headcount3 key={i} count={i + 1} />)
            }
          }
      }

      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={()=>this.setState({ empOneShow: true })}>
            Employees
          </Button>
          <Headcount show={this.state.empOneShow} next={onToEmployees} onUpdate={this.handleFormState}/>
          <Headcount2 show={this.state.empTwoShow} travis={this.array} employeeCount={this.state.employeeCount} next={empTwoClose} onUpdate={this.handleFormState}/>
        </ButtonToolbar>
      );
    }
});

export default AddEditDeck;
//
// { if (this.state.employeeCount) {
//     for (let i = 0; i < this.state.employeeCount; i++){
//       if (i < this.state.employeeCount - 1){
//         return  <Headcount2 show={this.state.empTwoShow} next={nextEmployee} onUpdate={this.handleFormState}/>
//       } else if (i == this.state.employeeCount - 1) {
//         return  <Headcount2 show={this.state.empTwoShow} next={empTwoClose} onUpdate={this.handleFormState}/>
//       } else {
//         return <div></div>
//       }
//     }
//   }
// }

          // <Headcount2 show={this.state.empTwoShow} onHide={empTwoClose} onUpdate={this.handleFormState}/>
// <Headcount show={this.state.empOneShow} next={saveAndCont} onEmployeeCount={this.handleEmployeeCount} onEmployeeTaxBenefits={this.handleEmployeeTaxBenefits}/>
