
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide3 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide3">
        <Link to="/nextlevel">
          <img className="pic3" src={require('./nxtlvl.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide3;