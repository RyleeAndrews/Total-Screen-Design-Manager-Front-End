
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide11 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide11">
        <Link to="/champion">
          <img className="pic11" src={require('./champion.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide11;