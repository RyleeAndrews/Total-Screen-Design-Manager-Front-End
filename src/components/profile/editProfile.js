import React from 'react';
import { Link } from 'react-router-dom';
import AuthDashboard from '../auth/authdashboard.js';
import * as actions from './profileactions.js';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

class EditProfile extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeOfCompanyName = this.handleChangeOfCompanyName.bind(this);
    this.handleChangeOfFirstName = this.handleChangeOfFirstName.bind(this);
    this.handleChangeOfLastName = this.handleChangeOfLastName.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    let initialState = {
      companyname: '',
      firstname: '',
      lastname: '',
    };

    this.state = Object.assign(this.props.profile, initialState);
  }

  handleChangeOfCompanyName(event){
    event.preventDefault();
    this.setState({companyname: event.target.value});
  }

  handleChangeOfFirstName(event){
    event.preventDefault();
    this.setState({firstname: event.target.value});
  }

  handleChangeOfLastName(event){
    event.preventDefault();
    this.setState({lastname: event.target.value});
  }

  handleUpdate(event){
    event.preventDefault();
    this.props.updateUser(Object.assign({}, this.state));
  }

  render(){
    console.log(this.props.profile);
    return(
      <div>
        <div className="head1">
          <h1 className="word1"> Total Screen Design </h1>
          <div className="btnHead">
            <Link to="/">
              <button className="pageBtn2"> Home </button>
            </Link>
            <Link to="/about">
              <button className="pageBtn2"> About </button>
            </Link>
            <Link to="/contact">
              <button className="pageBtn2"> Contact </button>
            </Link>
          </div>
          <div className="auth">
            <AuthDashboard className="authDash"/>
          </div>
        </div>
        <div className="btnProfile">
          <Link to="/profile">
            <button className="pageBtn3"> Profile </button>
          </Link>
          <Link to="/editprofile">
            <button className="pageBtn3"> Edit Profile </button>
          </Link>
          <Link to="/pastorders">
            <button className="pageBtn3"> Past Orders </button>
          </Link>
          <Link to="/uploadartwork">
            <button className="pageBtn3"> Upload Artwork </button>
          </Link>
        </div>
        <form onSubmit={this.handleUpdate}>
          edit your company name:
          <input value={this.state.companyname} onChange={this.handleChangeOfCompanyName} />
          edit your first name:
          <input value={this.state.firstname} onChange={this.handleChangeOfFirstName} />
          edit your last name:
          <input value={this.state.lastname} onChange={this.handleChangeOfLastName} />
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = ( dispatch, getState ) => ({
  updateUser: user => dispatch(actions.updateUser(user)),
  deleteUser: user => dispatch(actions.deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
