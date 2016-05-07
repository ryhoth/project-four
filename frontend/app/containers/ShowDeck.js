import React, { Component } from 'react';
import AddEditDeck from './AddEditDeck';
import xls from '../../utils/math';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid } from 'react-bootstrap';


const ShowDeck = React.createClass({


  render: function() {

		let renderEmployee;
		let renderBudget;
		if (this.props.employeeData){
			renderEmployee = xls.table(xls.headCountTable(this.props.employeeData), "Employees")
			// console.log("this.props.employeeData",this.props.employeeData);
		};
		// if (this.props.budgetData){
		// renderBudget = this.tabling(this.budgetTable(this.props.budgetData[0]["consultants"], this.props.budgetData[0]["operations"], this.props.budgetData[0]["capEx"]));
		// // if (this.props.budgetData){
		// console.log("this is the budgetData in show deck",this.props.budgetData);
		// console.log("this.props.budgetData[0]",this.props.budgetData[0]);
		// console.log("this is renderBudget after tabling", renderBudget);
		//
		// };
		// console.log(xls.test("travis"));

    return (
			<Grid>
			<h2>Employees</h2>
			<BootstrapTable data={ renderEmployee } striped={true} hover={true}>
				<TableHeaderColumn dataField='Employees' isKey={ true }>Employees</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 1'>Month 1</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 2'>Month 2</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 3'>Month 3</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 4'>Month 4</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 5'>Month 5</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 6'>Month 6</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 7'>Month 7</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 8'>Month 8</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 9'>Month 9</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 10'>Month 10</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 11'>Month 11</TableHeaderColumn>
				<TableHeaderColumn dataField='Month 12'>Month 12</TableHeaderColumn>
				<TableHeaderColumn dataField='Total'>Total</TableHeaderColumn>
			</BootstrapTable>
			</Grid>
    );
  }
});

export default ShowDeck;

//

// <h2>Employees</h2>
// <BootstrapTable data={ renderEmployee } striped={true} hover={true}>
// 	<TableHeaderColumn dataField='Employees' isKey={ true }>Employees</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 1'>Month 1</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 2'>Month 2</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 3'>Month 3</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 4'>Month 4</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 5'>Month 5</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 6'>Month 6</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 7'>Month 7</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 8'>Month 8</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 9'>Month 9</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 10'>Month 10</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 11'>Month 11</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Month 12'>Month 12</TableHeaderColumn>
// 	<TableHeaderColumn dataField='Total'>Total</TableHeaderColumn>
// </BootstrapTable>
// <h2>Budget</h2>
// <BootstrapTable data={ renderBudget } striped={true} hover={true}>
// <TableHeaderColumn dataField='Month 1' isKey={ true }>Month 1</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 2'>Month 2</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 3'>Month 3</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 4'>Month 4</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 5'>Month 5</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 6'>Month 6</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 7'>Month 7</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 8'>Month 8</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 9'>Month 9</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 10'>Month 10</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 11'>Month 11</TableHeaderColumn>
// <TableHeaderColumn dataField='Month 12'>Month 12</TableHeaderColumn>
// <TableHeaderColumn dataField='Total'>Total</TableHeaderColumn>
// </BootstrapTable>








// var x = this.employeeInputOrganize(arrayOfForms);
// var y = this.objOrg(budget[0]["consultants"])
// this.budgetTable(budget[0]["consultants"], budget[0]["operations"])
// this.headCountTable(arrayOfForms);
