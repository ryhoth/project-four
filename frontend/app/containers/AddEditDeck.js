import React, { Component } from 'react';
import Headcount from '../components/UserInput/Headcount'
import Headcount2 from '../components/UserInput/Headcount2'
import Headcount3 from '../components/UserInput/Headcount2body'

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

const AddEditDeck = React.createClass({
  getInitialState() {
    return {
      emp1Display: false,
      emp2Display: false,

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
    // if statement with e.target.key?
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


// this saves the employee info and pushes it into employeeInfo array
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

  employeeQuestFormArray: [],


    render() {

      // this moves on from employee questionair 1 -> 2 and calls fxn that populates the questionair form with employee count
      let onToEmployees = () => {
        this.setState({ emp1Display: false, emp2Display: true })
        employeeForms();
      }
      //this closes out questionaire and saves the data from employee questionaire into an array
      let empTwoClose = () => {
        this.setState({ emp2Display: false });
        this.saveEmployees()
      }
      //this populates how many forms need to be in employee questionair
      let employeeForms = () => {
        if (this.state.employeeCount) {
            for (let i = 0; i < this.state.employeeCount; i++){
                this.employeeQuestFormArray.push(<Headcount3 key={i} count={i + 1} />)
            }
          }
      }

      return (
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={()=>this.setState({ emp1Display: true })}>
              Employees
            </Button>
          </ButtonToolbar>
          <Headcount show={this.state.emp1Display} next={onToEmployees} onUpdate={this.handleFormState}/>
          <Headcount2 show={this.state.emp2Display} empQuestForms={this.employeeQuestFormArray} employeeCount={this.state.employeeCount} next={empTwoClose} onUpdate={this.handleFormState}/>

        </div>
      );
    }
});

export default AddEditDeck;
