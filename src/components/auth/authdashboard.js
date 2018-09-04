import './auth.scss';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './authactions.js';
import AuthForm from './authform.js';

class AuthDashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      init: true,
      signinto: false,
      signinPage: true,
    };
  }

  UNSAFE_componentWillMount(){
    this.stop = this.props.authLogin()
      .then( () => this.setState({init: false}));

  }

  componentWillUnmount(){
    delete(this.stop);
  }

  render(){
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
            <p className="signedIn"> signed in as {this.props.profile.firstname} from {this.props.profile.companyname}</p>
            <Link to="/profile">
              <button type="submit" className="profilebtn"> profile </button>
            </Link>
            <button type="submit" className="logoutbtn" onClick={this.props.authLogout}> logout </button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch, getState) => ({
  authLogin: user => dispatch(actions.authLogin(user)),
  authCreate: user => dispatch(actions.authCreateAccount(user)),
  authLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);
