import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

import { Button, ButtonToolbar } from 'react-bootstrap';

import Navigation from '../components/Navigation';



const Main = React.createClass({

  // getInitialState() {
  //   return{
  //     employeeData: [],
  //     budgetData: [],
  //     revenueData: [],
  // }
  // },
  //
  // handleUpdateEmployee: function(array) {
  //   this.setState({
  //     employeeData: array
  //   });
  // },
  // handleUpdateBudget: function(array) {
  //   this.setState({
  //     budgetData: array
  //   });
  // },
  // handleUpdateRevenue: function(array) {
  //   this.setState({
  //     revenueData: array
  //   });
  // },

  render: function () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
});

export default Main;
