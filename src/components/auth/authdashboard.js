import React from 'react';
import {connect} from 'react-redux';
import * as actions from './authactions.js';
import AuthForm from './authform.js';

class AuthDashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      init: true,
      signin: false,
      signinPage: true,
    };
  }

  UNSAFE_componentWillMount(){
    this.props.authLogin()
      .then( () => this.setState({init: false}));
  }

  render(){
    if(this.state.init){
      return null;
    }
    console.log(this.state.init);
    return(
      <div>
        <AuthForm
          signUp={this.props.authCreate}
          signIn={this.props.authLogin}
        />
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
