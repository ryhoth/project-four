import React, { Component } from 'react';
import Headcount from '../components/UserInput/Headcount'
import Headcount2 from '../components/UserInput/Headcount2'

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
      employeeEquity: null,
      employees: []
    };
  },

  fuckingArray : [],

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


  // ryan gotta fix this because we wanna loop and do all the forms, not one by one
  saveEmployees: function () {
    this.employeeInfo.push({
      employeeName: this.state.employeeName,
      employeePosition: this.state.employeePosition,
      employeeSalary: this.state.employeeSalary,
      employeeBonus: this.state.employeeBonus,
      employeeEquity: this.state.employeeEquity
    });
    console.log("employeeInfo: ", this.employeeInfo);
  },

    render() {

      let onToEmployees = () => {
        this.setState({ empOneShow: false})
        employeeForms();
      }

      let employeeForms = () => {
        console.log("running employeeform fxn");
        if (this.state.employeeCount) {
            for (let i = 0; i < this.state.employeeCount; i++){
              this.fuckingArray.push(<Headcount2 key={i} employeeCount={this.state.employeeCount} next={nextEmployee} onUpdate={this.handleFormState}/>)
            }
        }
        console.log("employeeForms end")
      }

      let nextEmployee = () => {
        this.saveEmployees();
      }

      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={()=>this.setState({ empOneShow: true })}>
            Employees
          </Button>
          <Headcount show={this.state.empOneShow} next={onToEmployees} onUpdate={this.handleFormState}/>
          {this.fuckingArray}
        </ButtonToolbar>
      );
    }
});

export default AddEditDeck;
