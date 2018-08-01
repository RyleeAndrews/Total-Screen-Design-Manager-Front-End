
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide4 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/richardson">
          <img className="pic" src={require('./richardson.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide4;
