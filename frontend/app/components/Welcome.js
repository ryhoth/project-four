import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';


class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome Welcome Welcome Welcome Welcome Welcome</p>
          <li><Link to={'/SignIn'}>SignIn</Link></li>
          <li><Link to={'/SignUp'}>SignUp</Link></li>
      </div>
    );
  }
}

export default Welcome;
