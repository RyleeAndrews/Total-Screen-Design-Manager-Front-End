import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
class Home extends React.Component {
  constructor(props){
    super(props);

    this.pageToggle = this.pageToggle.bind(this);
    this.state = {
      intro: true,
    };
  }
  pageToggle(event){
    event.preventDefault();
    this.setState({intro: !this.state.intro});
  }
  render(){
    return(
      <div>
        {this.state.intro ? (
          <div className="frontDiv">
            <img className="frontPhoto" src={require('./frontPhoto.jpg')}/>
            <button type="submit" className="frontButton" onClick={this.pageToggle}> click me </button>
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
              <Link className="embroidered" to="/embroidered">
                <h3> Embroidered </h3>
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
      </div>
    );
  }
}

export default Home;
