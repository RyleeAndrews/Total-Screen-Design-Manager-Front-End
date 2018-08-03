import './profile.scss';
import React from 'react';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);

    let initialState = {
      firstname: '',
      lastname: '',
      avatar: '',
      avatarFile: '',
    };

    this.state = Object.assign(initialState, this.props.profile);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeOfFirstname = this.onChangeOfFirstname.bind(this);
    this.onChangeOfLastname = this.onChangeOfLastname.bind(this);
  }

  onChangeOfFirstname(event){
    event.preventDefault();
    this.setState({ firstname: event.target.value });
  }

  onChangeOfLastname(event){
    event.preventDefault();
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.updateUser(Object.assign({}, this.props.profile, this.state));
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label id="firstname"> your first name </label>
          <input htmlFor="firstname" value={this.state.firstname} onChange={this.onChangeOfFirstname} />
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
