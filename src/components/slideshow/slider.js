import React from 'react';
import Slide1 from './slide.js';
import Slide2 from './slide2.js';
import Slide3 from './slide3.js';
import Slide4 from './slide4.js';
import Slide5 from './slide5.js';
import LeftArrow from './leftArrow.js';
import RightArrow from './rightArrow.js';
class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.state = {
      slideCount: 1
    }
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }

  render() {

    return (
      <div className="slider">

        {/* Slides go here */}
        { this.state.slideCount === 1 ?
          <div>
            <Slide1 />
            <RightArrow nextSlide={this.nextSlide}/>
          </div>
          : null }

        { this.state.slideCount === 2 ?
          <div>
            <Slide2 />
            <LeftArrow previousSlide={this.previousSlide}/>
            <RightArrow nextSlide={this.nextSlide}/>
          </div>
          : null
        }
        { this.state.slideCount === 3 ?
          <div>
            <Slide3 />
            <LeftArrow previousSlide={this.previousSlide}/>
            <RightArrow nextSlide={this.nextSlide}/>
          </div>
          : null
        }
        { this.state.slideCount === 4 ?
          <div>
            <Slide4 />
            <LeftArrow previousSlide={this.previousSlide}/>
            <RightArrow nextSlide={this.nextSlide}/>
          </div>
          : null
        }
        { this.state.slideCount === 5 ?
          <div>
            <Slide5 />
            <LeftArrow previousSlide={this.previousSlide}/>
            <RightArrow nextSlide={this.nextSlide}/>
          </div>
          : null
        }
      </div>
    );
  }
}

export default Slider;
