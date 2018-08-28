
import './profile.scss';
import React from 'react';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);

    let initialState = {
      firstname: '',
      lastname: '',
      companyname: '',
    };

    this.state = Object.assign(initialState, this.props.profile);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeOfFirstname = this.onChangeOfFirstname.bind(this);
    this.onChangeOfLastname = this.onChangeOfLastname.bind(this);
    this.onChangeOfCompanyname = this.onChangeOfCompanyname.bind(this);
  }

  onChangeOfFirstname(event){
    event.preventDefault();
    this.setState({ firstname: event.target.value });
  }

  onChangeOfLastname(event){
    event.preventDefault();
    this.setState({ lastname: event.target.value});
  }

  onChangeOfCompanyname(event){
    event.preventDefault();
    this.setState({ companyname: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.profileCreate(Object.assign({}, this.props.profile, this.state));
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label id="firstname"> your first name </label>
          <input htmlFor="firstname" value={this.state.firstname} onChange={this.onChangeOfFirstname} />
          <br/>
          <label id="lastname"> your last name </label>
          <input htmlFor="lastname" value={this.state.lastname} onChange={this.onChangeOfLastname} />
          <br />
          <label id="companyname"> your company name </label>
          <input htmlFor="companyname" value={this.state.companyname} onChange={this.onChangeOfCompanyname} />
          <br />
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
