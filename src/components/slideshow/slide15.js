
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide15 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide15">
        <Link to="/jamerica">
          <img className="pic15" src={require('./jamerica.jpg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide15;
