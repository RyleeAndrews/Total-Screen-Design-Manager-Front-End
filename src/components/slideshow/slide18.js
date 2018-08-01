
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide18 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/browse">
          <img className="pic" src={require('./final.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide18;
