import React from 'react';
import './slideshow.scss';

class LeftArrow extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div onClick={this.props.previousSlide} className="backArrow">
        <i id="leftArrow" className="fas fa-arrow-left"></i>
      </div>
    );
  }
}

export default LeftArrow;
