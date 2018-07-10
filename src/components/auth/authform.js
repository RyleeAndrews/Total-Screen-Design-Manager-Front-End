import React from 'react';
import './auth.scss';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeOfEmail = this.handleChangeOfEmail.bind(this);
    this.handleChangeOfPassword = this.handleChangeOfPassword.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.submitSignin = this.submitSignin.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeOfEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  handleChangeOfPassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  submitSignup(event){
    event.preventDefault();
    this.props.signUp(Object.assign({}, this.state));
  }

  submitSignin(event){
    event.preventDefault();
    this.props.signIn(Object.assign({}, this.state));
  }

  render(){
    return(
      <div>
        <form className="signupForm" onSubmit={this.submitSignup}>
          <label id="email"> enter your email: </label>
          <input htmlFor="email" value={this.state.email} onChange={this.handleChangeOfEmail}/>
          <br/>
          <label id="signUpPassword"> create a password: </label>
          <input htmlFor="signUpPassword" type="password" value={this.state.password} onChange={this.handleChangeOfPassword}/>
          <br/>
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
