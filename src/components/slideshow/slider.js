import React from 'react';
import Slide1 from './slide.js';
import Slide2 from './slide2.js';
import Slide3 from './slide3.js';
import Slide4 from './slide4.js';
import Slide5 from './slide5.js';
import Slide6 from './slide6.js';
import Slide7 from './slide7.js';
import Slide8 from './slide8.js';
import Slide9 from './slide9.js';
import Slide10 from './slide10.js';
import Slide11 from './slide11.js';
import Slide12 from './slide12.js';
import Slide13 from './slide13.js';
import Slide14 from './slide14.js';
import Slide15 from './slide15.js';
import Slide16 from './slide16.js';
import Slide17 from './slide17.js';
import Slide18 from './slide18.js';
import LeftArrow from './leftArrow.js';
import RightArrow from './rightArrow.js';
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.state = {
      slideCount: 1,
    };
  }

  UNSAFE_componentWillMount(){
    this.timer();
  }

  timer(){
    setInterval(this.nextSlide,3000);
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }

  render() {
    return (
      <div>
        <div className="slider">
        <div className="brands">
          <p className="brandsWord">
            Our brands that we carry click on each logo for catalog of that brand
          </p>
        </div>
          {/* Slides go here */}
          { this.state.slideCount === 1 ?
            <div>
              <Slide1 />
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
          { this.state.slideCount === 6 ?
            <div>
              <Slide6 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 7 ?
            <div>
              <Slide7 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 8 ?
            <div>
              <Slide8 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 9 ?
            <div>
              <Slide9 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 10 ?
            <div>
              <Slide10 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 11 ?
            <div>
              <Slide11 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 12 ?
            <div>
              <Slide12 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 13 ?
            <div>
              <Slide13 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 14 ?
            <div>
              <Slide14 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 15 ?
            <div>
              <Slide15 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 16 ?
            <div>
              <Slide16 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 17 ?
            <div>
              <Slide17 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 18 ?
            <div>
              <Slide18 />
              <LeftArrow previousSlide={this.previousSlide}/>
            </div>
            : null
          }
        </div>
        { this.state.slideCount > 18 ?
          <div className="afterSlide">
            <div className="imgContainer">
            </div>
            <div className="imgContainer">
            </div>
            <div className="imgContainer">
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

export default Slider;
