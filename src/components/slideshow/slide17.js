
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide17 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/lat">
          <img className="pic" src={require('./lat.jpeg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide17;
