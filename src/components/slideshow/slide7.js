
import React from 'react';
import { Link } from 'react-router-dom';
import './slideshow.scss';

class Slide7 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide7">
        <Link to="/hanes">
          <img className="pic7" src={require('./hanes.jpeg')} />
          <button type="submit" className="btnPhoto"></button>
        </Link>
      </div>
    );
  }
}

export default Slide7;