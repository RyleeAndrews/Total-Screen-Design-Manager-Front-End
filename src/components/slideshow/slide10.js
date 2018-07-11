
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide10 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide10">
        <Link to="/portandcompany">
          <img className="pic10" src={require('./pandco.jpg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide10;
