import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false,
      successMsg: ''
    };
  }

  // all auth fxns take a cb fxn that specify what to do after the ajax call
  // success is a bool
  handleSignup() {
    var callbackAfterSignup = function(success) {
      if (!success) {
        console.log('There was an error');
        return this.setState({ error: true });
      } else {
        // successfully signed up
        this.props.history.push('/');
      }
    }.bind(this);

    auth.signup(this.state.email, this.state.password, this.state.passwordConfirmation, callbackAfterSignup);
  }

  render() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>You are logged in!</p>
        </div>
      )
    }

    return (
      <div>
        <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value}) } />
        <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value}) } />
        <input placeholder='password confirmation' type='password' name='passwordConf' onChange={ e => this.setState({passwordConfirmation: e.target.value}) } />
        <button onClick={ () => this.handleSignup() }>Submit</button>
        <p>Already have an account?<Link to={'/'}>Sign In</Link></p>
        <p>{this.state.successMsg}</p>
      </div>
    );
  }
}

export default SignUp;
