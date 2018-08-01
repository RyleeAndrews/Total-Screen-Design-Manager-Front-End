
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide13 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/driduck">
          <img className="pic" src={require('./driduck1.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide13;
