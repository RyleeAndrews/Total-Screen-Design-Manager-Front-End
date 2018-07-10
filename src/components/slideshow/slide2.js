import React from 'react';
import './slideshow.scss';

class Slide2 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide2">
        <img className="pic2" src={require('./pandco.jpg')} />
      </div>
    );
  }
}

export default Slide2;
