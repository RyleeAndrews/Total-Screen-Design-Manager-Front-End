
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide10 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/portandcompany">
          <img className="pic" src={require('./pandco2.jpg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide10;
