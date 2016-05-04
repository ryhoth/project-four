import React, { Component } from 'react';
import Headcount from '../components/UserInput/Headcount'
import Headcount2 from '../components/UserInput/Headcount2'
import Headcount3 from '../components/UserInput/Headcount2body'
import Budget1 from '../components/UserInput/Budget1'
import Budget2 from '../components/UserInput/Budget2'
import Budget3 from '../components/UserInput/Budget3'
import Budget4 from '../components/UserInput/Budget4'


import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

const AddEditDeck = React.createClass({
  getInitialState() {
    return {
      emp1Display: false,
      emp2Display: false,
      bud1Display: false,
      bud2Display: false,
      bud3Display: false,
      bud4Display: false,

      employeeCount: null,
      employeeTaxBenefits: null,

      employeeName: null,
      employeePosition: null,
      employeeSalary: null,
      employeeBonus: null,
      employeeEquity: null,

      finance: null,
      legal: null,
      tech: null,
      contentEditorial: null,
      design: null,
      marketing: null,
      other: null,

      rent: null,
      internet: null,
      saas: null,
      softwareLicense: null,
      equipment: null,
      officeSupplies: null,
      travel: null,
      ConfTrade: null,
      duesAndSubscription: null,
      insurance: null,
      pettyCash: null,

      capEx: null




    };
  },


// swtich statement to grave the values from the form and set the state in this container
  handleFormState: function (e) {
    // if statement with e.target.key?   dot in to the $x.y.z; x is the form, y is the question
    switch (e.target.name) {
      case "employeeCount":
        this.setState({
          employeeCount: e.target.value
        })
        break;
      case "employeeTaxBenefits":
        this.setState({
          employeeTaxBenefits: e.target.value
        })
        break;
      case "employeeName":
        this.setState({
          employeeName: e.target.value
        })
        break;
      case "employeePosition":
        this.setState({
          employeePosition: e.target.value
        })
        break;
      case "employeeSalary":
        this.setState({
          employeeSalary: e.target.value
        })
        break;
      case "employeeBonus":
        this.setState({
          employeeBonus: e.target.value
        })
        break;
      case "employeeEquity":
        this.setState({
          employeeEquity: e.target.value
        })
        break;
      case "finance":
        this.setState({
          finance: e.target.value
        })
        break;
      case "legal":
        this.setState({
          legal: e.target.value
        })
        break;
      case "tech":
        this.setState({
          tech: e.target.value
        })
        break;
      case "contentEditorial":
        this.setState({
          contentEditorial: e.target.value
        })
        break;
      case "design":
        this.setState({
          design: e.target.value
        })
        break;
      case "marketing":
        this.setState({
          marketing: e.target.value
        })
        break;
      case "other":
        this.setState({
          other: e.target.value
        })
        break;
      case "rent":
        this.setState({
          rent: e.target.value
        })
        break;
      case "internet":
        this.setState({
          internet: e.target.value
        })
        break;
      case "saas":
        this.setState({
          saas: e.target.value
        })
        break;
      case "softwareLicense":
        this.setState({
          softwareLicense: e.target.value
        })
        break;
      case "equipment":
        this.setState({
          equipment: e.target.value
        })
        break;
      case "officeSupplies":
        this.setState({
          officeSupplies: e.target.value
        })
        break;
      case "travel":
        this.setState({
          travel: e.target.value
        })
        break;
      case "ConfTrade":
        this.setState({
          ConfTrade: e.target.value
        })
        break;
      case "duesAndSubscription":
        this.setState({
          duesAndSubscription: e.target.value
        })
        break;
      case "insurance":
        this.setState({
          insurance: e.target.value
        })
        break;
      case "pettyCash":
        this.setState({
          pettyCash: e.target.value
        })
        break;
      case "capEx":
        this.setState({
          capEx: e.target.value
        })
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
    console.log("employeeInfo: ", this.employeeInfo);
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
                this.employeeQuestFormArray.push(<Headcount3 key={i} count={i + 1} onUpdate={this.handleFormState}/>)
            }
          }
      }
      //this will move onto the second budget questionair *** three for now but change that
      let onToBudget2 = () => {
        this.setState({ bud1Display: false, bud2Display: true })
      }
      //this will move onto the third budget questionair *** one to three for now but change that
      let onToBudget3 = () => {
        this.setState({ bud1Display: false, bud3Display: true })
      }
      let onToBudget4 = () => {
        this.setState({ bud3Display: false, bud4Display: true })
      }
      // closes budget four and saves all the state into an array with a fxn
      let budgetClose = () => {
        this.setState({ bud4Display: false });
      }

      return (
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={()=>this.setState({ emp1Display: true })}>
              Employees
            </Button>
            <Button bsStyle="primary" onClick={()=>this.setState({ bud1Display: true })}>
              Budget
            </Button>
          </ButtonToolbar>
          <Headcount show={this.state.emp1Display} next={onToEmployees} onUpdate={this.handleFormState}/>
          <Headcount2 show={this.state.emp2Display} next={empTwoClose} empQuestForms={this.employeeQuestFormArray} />
          <Budget1 show={this.state.bud1Display} next={onToBudget3} onUpdate={this.handleFormState}/>
          <Budget3 show={this.state.bud3Display} next={onToBudget4} onUpdate={this.handleFormState}/>
          <Budget4 show={this.state.bud4Display} next={budgetClose} onUpdate={this.handleFormState}/>
        </div>
      );
    }
});

export default AddEditDeck;
