
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide14 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide">
        <Link to="/holloway">
          <img className="pic" src={require('./holloway.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide14;
