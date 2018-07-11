
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide8 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide8">
        <Link to="/district">
          <img className="pic8" src={require('./districtlogo.gif')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide8;
