import React from 'react';
import { Link } from 'react-router-dom';
import AuthDashboard from '../auth/authdashboard.js';
import {connect} from 'react-redux';
import './home.scss';
class Home extends React.Component {
  constructor(props){
    super(props);

    this.clearIntervalSet = this.clearIntervalSet.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.even = this.even.bind(this);
    this.state = {
      slideCount: 1,
    };
  }

  UNSAFE_componentWillMount(){
    this.timer = setInterval(this.nextSlide, 4000);
  }

  clearIntervalSet(){
    clearInterval(this.timer);
  }

  even(slideCounty){
    slideCounty = this.state.slideCount;
    return slideCounty%2;
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  render(){
    console.log(this.state.slideCount);
    return(
      <div>
        <div className="head">
          <h1 className="tsdhead"> Total Screen Design </h1>
          <div className="btnHead">
            <Link to="/">
              <button className="pageBtn"> Home </button>
            </Link>
            <Link to="/about">
              <button className="pageBtn"> About </button>
            </Link>
            <Link to="/contact">
              <button className="pageBtn"> Contact </button>
            </Link>
          </div>
          {
            this.props.auth.token ?
              <div className="loggedIn">
                signed in as {this.props.auth.user.username}
              </div>
              :
              null
          }
        </div>
        {
          !this.props.auth.token ?
            <div className="formForAuth">
              <AuthDashboard />
            </div>
            :
            null
        }
        {
          this.even() === 1 ?
            <div className="wrapper">
              <img className="homephoto" src={require('./bellacan.png')} />
              <img className="homephoto" src={require('./district-made.png')} />
              <img className="homephoto" src={require('./pnc.png')} />
              <img className="homephoto" src={require('./alty.png')} />
              <img className="homephoto" src={require('./fruitofloom.png')} />
              <img className="homephoto" src={require('./nikee.png')} />
            </div>
            :
            <div className="wrapper">
              <img className="homephoto" src={require('./flexfit-logo.png')} />
              <img className="homephoto" src={require('./richardsoncap.png')} />
              <img className="homephoto" src={require('./newera.png')} />
              <img className="homephoto" src={require('./ogio.png')} />
              <img className="homephoto" src={require('./sport-tek.png')} />
              <img className="homephoto" src={require('./gildan.png')} />
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

export default connect(mapStateToProps)(Home);
