import React, { Component } from 'react';
import AddEditDeck from './AddEditDeck';

import { ButtonToolbar, Button, Grid } from 'react-bootstrap';

const ListDecks = React.createClass({
  // arr : [],
  //
  getInitialState() {
    return{
      employeeData: [],
      budgetData: [],
      revenueData: [],
  }
  },

  handleUpdateEmployee: function(array) {
    this.setState({
      employeeData: array
    });
  },
  handleUpdateBudget: function(array) {
    this.setState({
      budgetData: array
    });
  },
  handleUpdateRevenue: function(array) {
    this.setState({
      revenueData: array
    });
  },
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     error: null
  //   };
  // }
  //
  // componentDidMount() {
  //   ajaxHelpers.getProducts(function(data) {
  //     if (data) {
  //       this.setState({data: data})
  //     } else {
  //       this.setState({error: true})
  //     }
  //   }.bind(this))
  // }
  //
  // renderData() {
  //   return this.state.data.map(function(item, index) {
  //     return (
  //       <div key={index}>
  //         <p>{item.name}</p>
  //         <p>{item.price}</p>
  //       </div>
  //     );
  //   });
  // }


  // render() {
  //   if (this.state.error) {
  //     return (
  //       <p>There was an error.</p>
  //     )
  //   }
  //
  //   if (this.state.data) {
  //     return (
  //       <div>
  //         <p>We got data</p>
  //         {this.renderData()}
  //       </div>
  //     )
  //   }
  //
  //   return (
  //     <p>Loading products...</p>
  //   );
  // }


  render: function() {

    console.log("List deck employeeData:",this.state.employeeData);
    console.log("List deck budgetData:",this.state.budgetData);
    console.log("List deck revenueData:",this.state.revenueData);
    return (
      <Grid fluid>
        <AddEditDeck grabEmployee={this.handleUpdateEmployee} grabBudget={this.handleUpdateBudget} grabRevenue={this.handleUpdateRevenue} />
        <br/><br/><hr/>
        <p>Loading products...</p>
      </Grid>
    )
  }
});

export default ListDecks;
