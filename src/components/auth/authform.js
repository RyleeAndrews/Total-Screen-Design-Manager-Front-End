import React from 'react';
import './auth.scss';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeOfEmail = this.handleChangeOfEmail.bind(this);
    this.handleChangeOfPassword = this.handleChangeOfPassword.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.submitSignin = this.submitSignin.bind(this);
    this.signinToggle = this.signinToggle.bind(this);

    this.state = {
      email: '',
      password: '',
      signedIn: false,
    };
  }

  signinToggle(event){
    this.setState({signedIn: !this.state.signedIn});
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
        {!this.state.signedIn ?
          <div>
            <form className="signupForm" onSubmit={this.submitSignup}>
              <label id="email"> enter your email:
                <input htmlFor="email" value={this.state.email} onChange={this.handleChangeOfEmail}/>
              </label>
              <br/>
              <label id="signUpPassword"> create a password:
                <input htmlFor="signUpPassword" type="password" value={this.state.password} onChange={this.handleChangeOfPassword}/>
              </label>
              <button className="signBtn" type="submit"> submit </button>
              <button type="submit" onClick={this.signinToggle}> sign in </button>
            </form>
          </div>
          :
          <div>
            <form className="signinForm" onSubmit={this.submitSignin}>
              <label id="email"> email:
                <input htmlFor="email" value={this.state.email} onChange={this.handleChangeOfEmail} />
              </label>
              <br/>
              <label id="password"> password:
                <input htmlFor="password"  type="password" value={this.state.password} onChange={this.handleChangeOfPassword} />
              </label>
              <button className="signBtn" type="submit"> submit </button>
              <button type="submit" onClick={this.signinToggle}> sign up </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default AuthForm;
