
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide5 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide5">
        <Link to="/flexfit">
          <img className="pic5" src={require('./flexfit.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide5;
