import React, { Component } from 'react';
import Headcount from '../components/UserInput/Headcount'
import Headcount2 from '../components/UserInput/Headcount2'

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

const AddEditDeck = React.createClass({
  getInitialState() {
    return {
      headOneShow: false,
      headTwoShow: false,
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



    render() {
      // let headOneClose = () => this.setState({ headOneShow: false });
      let headTwoClose = () => {
        this.setState({ headTwoShow: false });
        console.log("current state:",this.state);
        this.saveEmployees()
      }
      // let headOneOpen = () => this.setState({ headOneShow: true });
      // let headTwoOpen = () => this.setState({ headTwoShow: true });
      let saveAndCont = () => {
        this.setState({ headOneShow: false, headTwoShow: true })
        // console.log("current state:",this.state)
      }
      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={()=>this.setState({ headOneShow: true })}>
            Employees
          </Button>

          <Headcount show={this.state.headOneShow} next={saveAndCont} onUpdate={this.handleFormState}/>

          <Headcount2 show={this.state.headTwoShow} onHide={headTwoClose} onUpdate={this.handleFormState}/>
        </ButtonToolbar>
      );
    }
});

export default AddEditDeck;
// <Headcount show={this.state.headOneShow} next={saveAndCont} onEmployeeCount={this.handleEmployeeCount} onEmployeeTaxBenefits={this.handleEmployeeTaxBenefits}/>
