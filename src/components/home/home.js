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
        {this.state.entry ? (
          <div className="frontDiv">
            <img className="frontPhoto" src={require('./frontPhoto.jpg')}/>
            <button type="submit" className="frontButton" onClick={this.pageToggle}> continue to website </button>
            <h1 className="words"> Welcome to Total Screen Design </h1>
            <p className="mission"> Welcome to “The Best Shirts on Earth” Your Premiere Source for Advertising Apparel since 1967.
            We provide custom designed screen printing and embroidered garments for nearly every occasion.
            From family reunions and summer camps, to corporate retreats and company uniforms we’ve got the right garment for you.
            Baseball, Softball, Basketball uniforms, sports warm up gear and coaches wear it’s all here.
            We have been at this game for a hand full of years.
            We understand your needs and we can help make you, your company, your team, or your group look their best.
            <br/>
            Our services include: (click on each service to find out more)
            </p>
            <div className="screendiv">
              <Link className="screenprint" to="/screenprint">
                <h3> Screen Printing </h3>
              </Link>
            </div>
            <div className="dtgdiv">
              <Link className="dtg" to="/dtg">
                <h3> Direct To Garment (DTG) </h3>
              </Link>
            </div>
            <div className="embroidereddiv">
              <Link className="embroidered" to="/embroidery">
                <h3> Embroidery </h3>
              </Link>
            </div>
            <div className="vinyldiv">
              <Link className="vinyl" to="/vinyl">
                <h3> Custom Vinyl </h3>
              </Link>
            </div>
            <div className="graphicdesigndiv">
              <Link className="graphicdesign" to="/graphicdesign">
                <h3> Graphic Design </h3>
              </Link>
            </div>
          </div>
        ) : null
        }
        {
          this.state.main ? (
            <div className="main">
              <div className="head">
                <h1 className="tsdhead"> Total Screen Design </h1>
                <div className="btnHead">
                  <Link to="/">
                    <button className="pageBtn"> Home </button>
                  </Link>
                  <Link to="/about">
                    <button className="pageBtn1"> About </button>
                  </Link>
                  <Link to="/contact">
                    <button className="pageBtn2"> Contact </button>
                  </Link>
                </div>
                <div className="auth">
                  <AuthDashboard/>
                </div>
              </div>
              <Slider/>
              <div className="shopDiv">
                <p className="shopWord"> Shop </p>
              </div>
              <div className="header">
                <div className="dropdown">
                  <Link to="/men">
                    <button className="dropbtn">Men</button>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/menssweatshirts"> Sweatshirts </Link>
                    <Link to="/mensshirts"> Shirts </Link>
                    <Link to="/mensweatpants"> Sweatpants </Link>
                  </div>
                </div>
                <div className="dropdown">
                  <Link to="/women">
                    <button className="dropbtn">Women</button>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/womenssweatshirts"> Sweatshirts </Link>
                    <Link to="/womensshirts"> Shirts </Link>
                    <Link to="/womensweatpants"> Sweatpants </Link>
                  </div>
                </div>
                <div className="dropdown">
                  <Link to="/youth">
                    <button className="dropbtn">Youth</button>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/youthsweatshirts"> Sweatshirts </Link>
                    <Link to="/youthshirts"> Shirts </Link>
                    <Link to="/youthsweatpants"> Sweatpants </Link>
                  </div>
                </div>
              </div>
              <div className="footer">
                <p className="footwords"> website made by Rylee Andrews copyright@2018 </p>
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default Home;
