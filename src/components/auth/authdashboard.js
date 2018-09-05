import './auth.scss';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './authactions.js';
import AuthForm from './authform.js';
import cookie from 'react-cookies';

class AuthDashboard extends React.Component {
  constructor(props){
    super(props);

    this.logoutOf = this.logoutOf.bind(this);
    let initial = {
      init: true,
      signinto: false,
      signinPage: true,
    };
    this.state = Object.assign(initial, this.props.profile)
  }

  UNSAFE_componentWillMount(){
    this.stop = this.props.authLogin()
      .then( () => this.setState({init: false}));

  }

  componentWillUnmount(){
    delete(this.stop);
  }

  logoutOf(){
    cookie.remove('auth', {path: '/'});
    this.props.authLogout();
  }


  render(){
    console.log(this.state.init);
    if(this.state.init){
      return null;
    }
    return(
      <div>
        {!this.props.auth.token ?
          <AuthForm
            signIn={this.props.authLogin}
            signUp={this.props.authCreate}
          />
          :
          <div>
            <p className="signedIn"> signed in as {this.state.firstname} from {this.state.companyname}</p>
            <Link to="/profile">
              <button type="submit" className="profilebtn"> profile </button>
            </Link>
            <button type="submit" className="logoutbtn" onClick={this.logoutOf}> logout </button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, getState) => ({
  authLogin: user => dispatch(actions.authLogin(user)),
  authCreate: user => dispatch(actions.authCreateAccount(user)),
  authLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);
