import React from 'react';
import { Link } from 'react-router-dom';
import AuthDashboard from '../auth/authdashboard.js';
import Slider from '../slideshow/slider.js';
import './home.scss';
class Home extends React.Component {
  constructor(props){
    super(props);

    this.pageToggle = this.pageToggle.bind(this);
    this.state = {
      entry: true,
      main: false,

    };
  }
  pageToggle(event){
    event.preventDefault();
    this.setState({entry: !this.state.entry, main: !this.state.main});
  }
  render(){

    return(
      <div>
            <div className="main">
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
                <div className="auth">
                  <AuthDashboard/>
                </div>
              </div>
              <Slider/>
              <div className="fill">
              </div>
              <div className="footer">
                <p className="footwords"> website made by Rylee Andrews copyright@2018 </p>
              </div>
            </div>
      </div>
    );
  }
}

export default Home;
