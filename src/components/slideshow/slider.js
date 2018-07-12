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

          {/* Slides go here */}
          { this.state.slideCount === 1 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide1 />
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null }

          { this.state.slideCount === 2 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide2 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 3 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide3 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 4 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide4 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 5 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide5 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 6 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide6 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 7 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide7 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 8 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide8 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 9 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide9 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 10 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide10 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 11 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide11 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 12 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide12 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 13 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide13 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 14 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide14 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 15 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide15 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 16 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide16 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 17 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide17 />
              <LeftArrow previousSlide={this.previousSlide}/>
              <RightArrow nextSlide={this.nextSlide}/>
            </div>
            : null
          }
          { this.state.slideCount === 18 ?
            <div>
              <div className="brands">
                <p className="brandsWord">
                  Our brands that we carry click on each logo for catalog of that brand
                </p>
              </div>
              <Slide18 />
              <LeftArrow previousSlide={this.previousSlide}/>
            </div>
            : null
          }
        </div>
        { this.state.slideCount > 18 ?
          <div className="popContainer">
            <div className="contentContainer">
            </div>
            <div className="contentContainer">
            </div>
            <div className="contentContainer">
            </div>
            <div className="contentContainer">
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

export default Slider;
