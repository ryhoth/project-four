import React, { Component } from 'react';
import auth from './auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

// Note: In your topmost route, you need to pass a component (this.props.children)
// On the home page, it's the Login component; on the /products page, it's the Products component
class App extends Component {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/unsupported'}>Unsupported</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

class Login extends Component {

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

class Signup extends Component {
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

// example of component you can see whether logged in or out
class About extends Component {
  render() {
    return (
      <div>
        <p>Im the about page</p>
      </div>
    );
  }
}

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    ajaxHelpers.getProducts(function(data) {
      if (data) {
        this.setState({data: data})
      } else {
        this.setState({error: true})
      }
    }.bind(this))
  }

  renderData() {
    return this.state.data.map(function(item, index) {
      return (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      );
    });
  }

  render() {
    if (this.state.error) {
      return (
        <p>There was an error.</p>
      )
    }

    if (this.state.data) {
      return (
        <div>
          <p>We got data</p>
          {this.renderData()}
        </div>
      )
    }

    return (
      <p>Loading products...</p>
    );
  }
}

// when navigate to unsupported route
class NoMatch extends Component {
  render() {
    return (
      <div>
        <p>Oops 404</p>
      </div>
    );
  }
}

// runs on pg load
// if user not logged in, redirect them home to make them sign in
// nextPathname: see bonus fun feature in handleLogin
function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/products" component={Products} onEnter={requireAuth} />
      <Route path="/edit" component={About} >
        <Route path="/edit/1" component={Signup} />
        <Route path="/edit/2" component={Signup} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
),document.getElementById('react-app'));
