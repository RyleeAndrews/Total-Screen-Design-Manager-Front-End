import './profile.scss';
import React from 'react';
import AuthDashboard from '../auth/authdashboard.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../auth/authactions.js';
import {renderIf, photoToDataUrl} from '../../lib/helperLib.js';
import ProfileForm from './profileform.js';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.handleImage = this.handleImage.bind(this);

    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(props){
    if(props.profile){
      this.setState(props.profile);
    }
    let preview = null;
    this.setState({preview});
  }

  handleImage(event){
    let {files} = event.target;
    let avatarFile = files[0];

    this.setState({avatarFile});

    photoToDataUrl(avatarFile)
      .then( preview => {
        this.setState({preview});
      })
      .catch(console.error);
  }

  render(){
    let hasPreview = this.state.preview || undefined;
    console.log(this.state);
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = ( dispatch, getState ) => ({
  updateUser: user => dispatch(actions.updateUser(user)),
  deleteUser: user => dispatch(actions.deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
