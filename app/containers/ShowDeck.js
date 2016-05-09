import React, { Component } from 'react';
import AddEditDeck from './AddEditDeck';
import xls from '../../utils/math';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid } from 'react-bootstrap';



const ShowDeck = React.createClass({
  getInitialState() {
    return {
      renderEmployee: xls.table(xls.headCountTable(this.props.employeeData), "Employees"),
  		renderConsultants: xls.table(xls.budgetTable(this.props.budgetData[0]["consultants"]), "Consultants"),
  		renderOperations: xls.table(xls.budgetTable(this.props.budgetData[0]["operations"]), "Operations"),
  		renderCapEx: xls.table(xls.budgetTable(this.props.budgetData[0]["capEx"]), "Capital Expenses"),
      renderRev: xls.table(xls.revTable(this.props.revData), "Revenues"),
    };
  },

  priceFormatter : function (cell, row) {
    return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
  },

  render: function() {

    return (
			<Grid>
        <h2 className="table-title">Employees</h2>
        <BootstrapTable data={ this.state.renderEmployee } striped={true} hover={true} trClassName="table" exportCSV={ true }>
          <TableHeaderColumn width='140' dataField='Employees' isKey={ true }>Employees</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
        </BootstrapTable>
        <h2 className="table-title">Budget</h2>
        <BootstrapTable data={ this.state.renderConsultants } striped={true} hover={true} trClassName="table" exportCSV={ true }>
          <TableHeaderColumn width='140' dataField='Consultants' isKey={ true }>Consultants</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
        </BootstrapTable>
        <br/>
        <BootstrapTable data={ this.state.renderOperations } striped={true} hover={true} trClassName="table" exportCSV={ true }>
          <TableHeaderColumn width='140' dataField='Operations' isKey={ true }>Operations</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
        </BootstrapTable>
        <br/>
        <BootstrapTable data={ this.state.renderCapEx } striped={true} hover={true} trClassName="table" exportCSV={ true }>
          <TableHeaderColumn width='140' dataField='Capital Expenses' isKey={ true }>Capital Expenses</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
          <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
        </BootstrapTable>
        <h2 className="table-title">Revenue</h2>
        <BootstrapTable data={ this.state.renderRev } striped={true} hover={true} trClassName="table" exportCSV={ true }>
          <TableHeaderColumn width='140' dataField='Revenues' isKey={ true }>Revenues</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 1'>Month 1</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 2'>Month 2</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 3'>Month 3</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 4'>Month 4</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 5'>Month 5</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 6'>Month 6</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 7'>Month 7</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 8'>Month 8</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 9'>Month 9</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 10'>Month 10</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 11'>Month 11</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Month 12'>Month 12</TableHeaderColumn>
          <TableHeaderColumn width='80' dataField='Total'>Total</TableHeaderColumn>
        </BootstrapTable>
      </Grid>
    );
  }
});

export default ShowDeck;


// <h2 className="table-title">Employees</h2>
// <BootstrapTable data={ renderEmployee } striped={true} hover={true} trClassName="table" exportCSV={ true }>
//   <TableHeaderColumn width='140' dataField='Employees' isKey={ true }>Employees</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
// </BootstrapTable>
// <h2 className="table-title">Budget</h2>
// <BootstrapTable data={ renderConsultants } striped={true} hover={true} trClassName="table" exportCSV={ true }>
//   <TableHeaderColumn width='140' dataField='Consultants' isKey={ true }>Consultants</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
// </BootstrapTable>
// <br/>
// <BootstrapTable data={ renderOperations } striped={true} hover={true} trClassName="table" exportCSV={ true }>
//   <TableHeaderColumn width='140' dataField='Operations' isKey={ true }>Operations</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
// </BootstrapTable>
// <br/>
// <BootstrapTable data={ renderCapEx } striped={true} hover={true} trClassName="table" exportCSV={ true }>
//   <TableHeaderColumn width='140' dataField='Capital Expenses' isKey={ true }>Capital Expenses</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 1'>Month 1</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 2'>Month 2</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 3'>Month 3</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 4'>Month 4</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 5'>Month 5</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 6'>Month 6</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 7'>Month 7</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 8'>Month 8</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 9'>Month 9</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 10'>Month 10</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 11'>Month 11</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Month 12'>Month 12</TableHeaderColumn>
//   <TableHeaderColumn width='80' dataFormat={ this.priceFormatter } dataField='Total'>Total</TableHeaderColumn>
// </BootstrapTable>





    // if (this.props.employeeData){
    //   renderEmployee = xls.table(xls.headCountTable(this.props.employeeData), "Employees");
    //   // renderEmployee = xls.headCountTable(this.props.employeeData);
    //   // console.log("this is the employeeData in show deck",this.props.employeeData);
    //   // console.log("this is renderEmployee consultants after headCountTable", renderEmployee);
    //   };

		// renderBudget = this.tabling(this.budgetTable(this.props.budgetData[0]["consultants"], this.props.budgetData[0]["operations"], this.props.budgetData[0]["capEx"]));
		// if (this.props.budgetData){
    //   renderConsultants = xls.table(xls.budgetTable(this.props.budgetData[0]["consultants"]), "Consultants");
    //   budgetTotsConsltants = xls.budgetTableTotal(this.props.budgetData[0]["consultants"]);
    //
    //   renderOperations = xls.table(xls.budgetTable(this.props.budgetData[0]["operations"]), "Operations");
    //   budgetTotsOperations = xls.budgetTableTotal(this.props.budgetData[0]["operations"]);
    //
    //
    //   renderCapEx = xls.table(xls.budgetTable(this.props.budgetData[0]["capEx"]), "Capital Expenses");
    //   budgetTotsCapex = xls.budgetTableTotal(this.props.budgetData[0]["capEx"]);
    //
    //
    //   budgetTotsAll = xls.addAllBudgetTypes(budgetTotsConsltants, budgetTotsOperations, budgetTotsOperations);
    //   console.log("AofA for budgetTots, in ShowDeck", budgetTotsAll);
		// };


    // if (this.props.revData){
    //   console.log("Rev data yo!", this.props.revData);
    //   console.log("employeeInputOrganize", xls.employeeInputOrganize(this.props.revData));
    //   };
