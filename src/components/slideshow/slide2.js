
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide2 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/bellacanvas">
          <img className="pic" src={require('./bellacanvas2.jpg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide2;
