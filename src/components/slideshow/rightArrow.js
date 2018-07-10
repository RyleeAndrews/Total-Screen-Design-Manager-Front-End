import React from 'react';
import './slideshow.scss';

class RightArrow extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div onClick={this.props.nextSlide} className="nextArrow">
        <i id="rightArrow" className="fas fa-arrow-right"></i>
      </div>
    );
  }
}

export default RightArrow;
