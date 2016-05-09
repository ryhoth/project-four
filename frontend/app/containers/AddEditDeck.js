import React, { Component } from 'react';
import Headcount from '../components/UserInput/Headcount';
import Headcount2 from '../components/UserInput/Headcount2';
import Headcount3 from '../components/UserInput/Headcount2body';
import Budget1 from '../components/UserInput/Budget1';
import Budget2 from '../components/UserInput/Budget2';
import Budget3 from '../components/UserInput/Budget3';
import Budget4 from '../components/UserInput/Budget4';
import Revenue1 from '../components/UserInput/Revenue1';
import Revenue2 from '../components/UserInput/Revenue2';
import Revenue3 from '../components/UserInput/Revenue3';
import Revenue4 from '../components/UserInput/Revenue4';
import Revenue5 from '../components/UserInput/Revenue5';
import Revenue6 from '../components/UserInput/Revenue6';
import Revenue7 from '../components/UserInput/Revenue7';
import Revenue8 from '../components/UserInput/Revenue8';
import ShowDeck from './ShowDeck';



import { ButtonToolbar, Button, Modal, Grid } from 'react-bootstrap';

const AddEditDeck = React.createClass({
  getInitialState() {
    return {
      jan: null,
      feb: null,
      mar: null,
      apr: null,
      may: null,
      jun: null,
      jul: null,
      aug: null,
      sept: null,
      oct: null,
      nov: null,
      dec: null,

      unitA: null,
      eventB: null,
      mediumC: null,
      probOfB: null,
      percOfC: null,
      dollarPerPofB: null,
      dollarPerPofC: null,

      emp1Display: false,
      emp2Display: false,
      bud1Display: false,
      bud2Display: false,
      bud3Display: false,
      bud4Display: false,
      rev1Display: false,
      rev2Display: false,
      rev3Display: false,
      rev4Display: false,
      rev5Display: false,
      rev6Display: false,
      rev7Display: false,
      rev8Display: false,

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

      capEx: null,

      showDeck: false,

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
      case "unitA":
        this.setState({
          unitA: e.target.value
        })
        break;
      case "eventB":
        this.setState({
          eventB: e.target.value
        })
        break;
      case "mediumC":
        this.setState({
          mediumC: e.target.value
        })
        break;
      case "probOfB":
        this.setState({
          probOfB: e.target.value
        })
        break;
      case "percOfC":
        this.setState({
          percOfC: e.target.value
        })
        break;
      case "dollarPerPofB":
        this.setState({
          dollarPerPofB: e.target.value
        })
        break;
      case "dollarPerPofC":
        this.setState({
          dollarPerPofC: e.target.value
        })
        break;
      case "jan":
        this.setState({
          jan: e.target.value
        })
        break;
      case "feb":
        this.setState({
          feb: e.target.value
        })
        break;
      case "mar":
        this.setState({
          mar: e.target.value
        })
        break;
      case "apr":
        this.setState({
          apr: e.target.value
        })
        break;
      case "may":
        this.setState({
          may: e.target.value
        })
        break;
      case "jun":
        this.setState({
          jun: e.target.value
        })
        break;
      case "jul":
        this.setState({
          jul: e.target.value
        })
        break;
      case "aug":
        this.setState({
          aug: e.target.value
        })
        break;
      case "sept":
        this.setState({
          sept: e.target.value
        })
        break;
      case "oct":
        this.setState({
          oct: e.target.value
        })
        break;
      case "nov":
        this.setState({
          nov: e.target.value
        })
        break;
      case "dec":
        this.setState({
          dec: e.target.value
        })
        break;
    };
  },


// this saves the employee info and pushes it into employeeInfo array
  employeeData: [],
  saveEmployeeGeneral: function () {
    this.employeeData.push({
      employeeCount: parseInt(this.state.employeeCount),
      employeeTaxBenefits: parseInt(this.state.employeeTaxBenefits)
    })
  },
  saveEmployeeData: function () {
    this.employeeData.push({
      employeeName: this.state.employeeName,
      employeePosition: this.state.employeePosition,
      employeeSalary: parseInt(this.state.employeeSalary),
      employeeBonus: parseInt(this.state.employeeBonus),
      employeeEquity: parseInt(this.state.employeeEquity)
    });
    console.log("employeeData: ", this.employeeData);
  },

  budgetData: [],
  saveBudgetData: function () {
    this.budgetData.push({
      consultants : {
        "finance": parseInt(this.state.finance),
        legal: parseInt(this.state.legal),
        tech: parseInt(this.state.tech),
        "content Editorial": parseInt(this.state.contentEditorial),
        design: parseInt(this.state.design),
        marketing: parseInt(this.state.marketing),
        other: parseInt(this.state.other)
      },
      operations : {
        rent: parseInt(this.state.rent),
        internet: parseInt(this.state.internet),
        saas: parseInt(this.state.saas),
        softwareLicense: parseInt(this.state.softwareLicense),
        equipment: parseInt(this.state.equipment),
        officeSupplies: parseInt(this.state.officeSupplies),
        travel: parseInt(this.state.travel),
        ConfTrade: parseInt(this.state.ConfTrade),
        duesAndSubscription: parseInt(this.state.duesAndSubscription),
        insurance: parseInt(this.state.insurance),
        pettyCash: parseInt(this.state.pettyCash),
      },
      capEx : {
        capEx: parseInt(this.state.capEx)
      }
    });
    console.log("budgetData:", this.budgetData);
  },

  // this saves the revenue info and pushes it into revData obj
  revData : [{}],
  saveRevenueWithMonths: function (param) {
    this.revData[0][param] = {
      name: this.state[param],
      projections:[]
    }
    for(let month = 0; month < 12; month++ ){
      this.revData[0][param].projections.push(
        parseInt(this.state[Object.keys(this.state)[month]])
      )
    }
  },
  saveRevenueWithOutMonths: function (param) {
    var arr = [];
    for(var i=0; i < 12; i++){
      arr[i] = parseInt(this.state[param]);
    }
    this.revData[0][param] = {
      name: "dollarPerPofB",
      projections: arr
    }
  console.log("revData in AddEditDeck", this.revData[0]);
  },

  //fxn that sends all data to math.js
  // sendToMath: function () {
  //   // if (this.employeeData && this.budgetData && this.revData) {
  //     this.props.grabEmployee(this.employeeData);
  //     this.props.grabBudget(this.budgetData);
  //     this.props.grabRevenue(this.revData);
  //
  //   // }
  // },


// this is an array where number of forms to be rendered into Headcount2 will be pushed into
  employeeQuestFormArray: [],

    render() {
          // budgetData={this.budgetData} revData={this.revData}
      if(this.state.showDeck) {
        return(
          <ShowDeck employeeData={this.employeeData} budgetData={this.budgetData} revData={this.revData} />
        )
      }
      // this moves on from employee questionair 1 -> 2 and calls fxn that populates the questionair form with employee count
      let onToEmployees = () => {
        this.setState({ emp1Display: false, emp2Display: true });
        // this.saveEmployeeGeneral();
        employeeForms();
      }
      //this closes out questionaire and saves the data from employee questionaire into an array
      let employeeClose = () => {
        this.setState({ emp2Display: false });
        this.saveEmployeeData()
      }
      //this populates how many forms need to be in employee questionair
      let employeeForms = () => {
        if (this.state.employeeCount) {
            for (let i = 0; i < this.state.employeeCount; i++){
                this.employeeQuestFormArray.push(<Headcount3 key={i} count={i + 1} onUpdate={this.handleFormState} />)
            }
          }
      }
      //this will move onto the second budget questionair *** three for now but change that
      let onToBudget2 = () => {
        this.setState({ bud1Display: false, bud2Display: true })
      }
      //this will move onto the third budget questionair *** one to three for now but change that
      let onToBudget3 = () => {
        this.setState({ bud1Display: false, bud3Display: true });
      }
      let onToBudget4 = () => {
        this.setState({ bud3Display: false, bud4Display: true })
      }
      // closes budget four and saves all the state into an array with a fxn
      let budgetClose = () => {
        this.setState({ bud4Display: false });
        this.saveBudgetData();
      }
      let onToRevenue2 = () => {
        this.setState({ rev1Display: false, rev2Display: true })
      }
      //this will move onto the third budget questionair *** one to three for now but change that
      let onToRevenue3 = () => {
        this.setState({ rev2Display: false, rev3Display: true });
        this.saveRevenueWithMonths("unitA");
      }
      let onToRevenue4 = () => {
        this.setState({ rev3Display: false, rev4Display: true })
      }
      let onToRevenue5 = () => {
        this.setState({ rev4Display: false, rev5Display: true });
        this.saveRevenueWithMonths("eventB");
      }
      let onToRevenue6 = () => {
        this.setState({ rev5Display: false, rev6Display: true })
      }
      let onToRevenue7 = () => {
        this.setState({ rev6Display: false, rev7Display: true });
        this.saveRevenueWithMonths("mediumC");
      }
      let onToRevenue8 = () => {
        this.setState({ rev7Display: false, rev8Display: true });
        this.saveRevenueWithMonths("percOfC");
      }
      let revenueClose = () => {
        this.setState({ rev8Display: false });
        this.saveRevenueWithOutMonths("dollarPerPofB");
      }
      let closeForm = () => {
        this.setState({
        emp1Display: false,
        emp2Display: false,
        bud1Display: false,
        bud2Display: false,
        bud3Display: false,
        bud4Display: false,
        rev1Display: false,
        rev2Display: false,
        rev3Display: false,
        rev4Display: false,
        rev5Display: false,
        rev6Display: false,
        rev7Display: false,
        rev8Display: false,
      });
      }

      return (
        <Grid fluid>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={()=>this.setState({ emp1Display: true })}>
              Employees
            </Button>
            <Button bsStyle="primary" onClick={()=>this.setState({ bud1Display: true })}>
              Budget
            </Button>
            <Button bsStyle="primary" onClick={()=>this.setState({ rev1Display: true })}>
              Revenue
            </Button>
            <Button bsStyle="success" onClick={()=>this.setState({ showDeck: true })}>
              Submit
            </Button>
          </ButtonToolbar>
          <Headcount show={this.state.emp1Display} next={onToEmployees} onUpdate={this.handleFormState} />
          <Headcount2 show={this.state.emp2Display} next={employeeClose} empQuestForms={this.employeeQuestFormArray} />
          <Budget1 show={this.state.bud1Display} next={onToBudget3} onUpdate={this.handleFormState}/>
          <Budget3 show={this.state.bud3Display} next={onToBudget4} onUpdate={this.handleFormState}/>
          <Budget4 show={this.state.bud4Display} next={budgetClose} onUpdate={this.handleFormState}/>
          <Revenue1 show={this.state.rev1Display} next={onToRevenue2} onUpdate={this.handleFormState}/>
          <Revenue2 show={this.state.rev2Display} next={onToRevenue3} onUpdate={this.handleFormState} unitA={this.state.unitA}/>
          <Revenue3 show={this.state.rev3Display} next={onToRevenue4} onUpdate={this.handleFormState} unitA={this.state.unitA}/>
          <Revenue4 show={this.state.rev4Display} next={onToRevenue5} onUpdate={this.handleFormState} unitA={this.state.unitA} eventB={this.state.eventB}/>
          <Revenue5 show={this.state.rev5Display} next={onToRevenue6} onUpdate={this.handleFormState} eventB={this.state.eventB}/>
          <Revenue6 show={this.state.rev6Display} next={onToRevenue7} onUpdate={this.handleFormState} unitA={this.state.unitA} eventB={this.state.eventB} mediumC={this.state.mediumC}/>
          <Revenue7 show={this.state.rev7Display} next={onToRevenue8} onUpdate={this.handleFormState} eventB={this.state.eventB} mediumC={this.state.mediumC}/>
          <Revenue8 show={this.state.rev8Display} next={revenueClose} onUpdate={this.handleFormState} eventB={this.state.eventB} />
        </Grid>
      );
    }
});

export default AddEditDeck;

            // <Button bsStyle="success" onClick={this.sendToMath}>
