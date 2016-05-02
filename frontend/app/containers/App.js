import React, { Component } from 'react';
import Main from './Main';
import NaviBar from '../components/Navigation';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Headcount from '../components/UserInput/Headcount';
import Headcount2 from '../components/UserInput/Headcount2';
import CarouselForm from '../components/UserInput/CarouselForm';

class App extends Component {
  render () {
    return (
      <div>
        <NaviBar />
        <div>{this.props.children}</div><br/><hr/>
        <SignUpForm/><br/><br/><hr/>
        <SignInForm/><br/><br/><hr/>
        <Headcount/><br/><br/><hr/>
        <Headcount2/>
      </div>
    )
  }
};

export default App;
