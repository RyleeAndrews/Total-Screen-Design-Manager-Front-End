
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide16 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide16">
        <Link to="/a4">
          <img className="pic16" src={require('./a4.png')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide16;
