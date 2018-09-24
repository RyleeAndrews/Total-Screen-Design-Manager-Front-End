import './profile.scss';
import React from 'react';
import AuthDashboard from '../auth/authdashboard.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './profileactions.js';
import {renderIf, photoToDataUrl} from '../../lib/helperLib.js';
import ProfileForm from './profileform.js';


class Profile extends React.Component {
  constructor(props){
    super(props);


    this.state = this.props.profile;
  }

  


  // handleImage(event){
  //   let {files} = event.target;
  //   let avatarFile = files[0];
  //
  //   this.setState({avatarFile});
  //
  //   photoToDataUrl(avatarFile)
  //     .then( preview => {
  //       this.setState({preview});
  //     })
  //     .catch(console.error);
  // }

  render(){
    console.log('yoooooo', this.props.profile);
    return(
      <div>
        {!this.props.auth.token ?
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
              <Link to="/order">
                <button className="pageBtn3"> Order </button>
              </Link>
              <Link to="/pastorders">
                <button className="pageBtn3"> Past Orders </button>
              </Link>
              <Link to="/uploadartwork">
                <button className="pageBtn3"> Upload Artwork </button>
              </Link>
            </div>
          </div>
          : (
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
                <Link to="/order">
                  <button className="pageBtn3"> Order </button>
                </Link>
                <Link to="/pastorders">
                  <button className="pageBtn3"> Past Orders </button>
                </Link>
                <Link to="/uploadartwork">
                  <button className="pageBtn3"> Upload Artwork </button>
                </Link>
              </div>
              {!this.props.profile.firstname ?
                <ProfileForm profileCreate={this.props.profileCreate}/>
                :
                <div>
                  <div className="first"> {this.props.profile.firstname} </div>
                  <br/>
                  <div className="last"> {this.props.profile.lastname} </div>
                  <br />
                  <div className="company"> {this.props.profile.companyname} </div>
                </div>
              }
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = ( dispatch, getState ) => ({
  profileCreate: profile => dispatch(actions.profileCreate(profile)),
  profileLoad: profile => dispatch(actions.profileLoad()),
  profileInitialize: () => dispatch(actions.profileInitialize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
