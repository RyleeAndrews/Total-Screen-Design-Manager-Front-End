
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide12 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide12">
        <Link to="/alternative">
          <img className="pic12" src={require('./alternative.jpg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide12;