
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide9 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide9">
        <Link to="/anvil">
          <img className="pic9" src={require('./anvillogo.jpg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide9;
