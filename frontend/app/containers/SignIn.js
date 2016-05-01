import React, { Component } from 'react';


class SignIn extends Component {

// get initial state
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    };
  }

  // runs on pg load
  // if user not logged in, redirect them home to make them sign in
  // nextPathname: see bonus fun feature in handleLogin
  // function requireAuth(nextState, replace) {
  //   if (!auth.loggedIn()) {
  //     replace({
  //       pathname: '/',
  //       state: { nextPathname: nextState.location.pathname }
  //     });
  //   }
  // }


  handleLogin() {
    var callbackAfterLogin = function(success) {
      if (!success) {
        return this.setState({ error: true });
      } else {

        this.setState({successMsg: 'Successfully logged in'});

        /* Bonus fun feature */
        // Route forwarding: if user tries to go to /products, but they're not logged in
        // first redirect them to '/', then after they login, redirect them to
        // '/products'
        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/');
        }
      }
    }.bind(this);

    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  }

  handleLogout() {
    var callbackAfterLogout = function(success) {
      if (success) {
        this.setState({successMsg: 'You have successfully logged out'});
      }
    }.bind(this);

    auth.logout(callbackAfterLogout);
  }

  render() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>You are logged in</p>
          <button onClick={ () => this.handleLogout() }>Logout</button>
          <p>{this.state.successMsg}</p>
        </div>
      )
    }

    return (
      <div>
        <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value}) } />
        <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value}) } />
        <button onClick={ () => this.handleLogin() }>Submit</button>
        <p>{"Don't have an account?"}<Link to={'/signup'}>Sign Up</Link></p>
        <p>{this.state.successMsg}</p>
      </div>
    );
  }
}

export default SignIn;
