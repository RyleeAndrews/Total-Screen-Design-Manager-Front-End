import React from 'react';
import { Link } from 'react-router-dom';
import AuthDashboard from '../auth/authdashboard.js';
import {connect} from 'react-redux';
import './home.scss';
class Home extends React.Component {
  constructor(props){
    super(props);


    this.nextSlide = this.nextSlide.bind(this);
    this.timerSlide = this.timerSlide.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.restart = this.restart.bind(this);
    this.endRestart = this.endRestart.bind(this);

    this.state = {
      slideCount: 1,
    };
  }

  timerSlide(){
    this.timer = setInterval(this.nextSlide, 4000);
  }

  restart(){
    this.timer2 = setInterval(this.previousSlide,4000);
  }

  stopTimer(){
    clearInterval(this.timer);
  }

  endRestart(){
    clearInterval(this.timer2);
  }

  previousSlide(){
    this.setState({slideCount: this.state.slideCount - 1});
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  render(){
    console.log(this.state.slideCount);
    return(
      <div>
        <div className="head">
          <h1 className="tsdhead"> Total Screen Design </h1>
          <div className="btnHead">
            <Link to="/">
              <button className="pageBtn"> Home </button>
            </Link>
            <Link to="/about">
              <button className="pageBtn"> About </button>
            </Link>
            <Link to="/contact">
              <button className="pageBtn"> Contact </button>
            </Link>
            <div className="dropdown">
              <button className="pageBtn"> Catalog </button>
              <div className="dropdown-content">
                <a href="https://www.companycasuals.com/totalscreendesign/start.jsp" rel="noopener noreferrer"
                  target="_blank"> Catalog 1</a>
                <a href="http://www.4logowearables.com/cgi-bin/hw/hwb/chw-browse-brand.w?hwCN=197208212203201210201214205199187201198215205216201&hwCNCD=&hwST=1"
                  rel="noopener noreferrer" target="_blank"> Catalog 2</a>
              </div>
            </div>
          </div>
          {
            this.props.auth.token ?
              <div className="loggedIn">
                signed in as {this.props.auth.user.username}
                <Link to="/profile">
                  <button type="submit"> Profile </button>
                </Link>
              </div>
              :
              null
          }
        </div>
        {
          !this.props.auth.token ?
            <div className="formForAuth">
              <AuthDashboard />
            </div>
            :
            null
        }
        <div className="products"> We carry these quality brands plus more! <div className="small">(Click on photo to view brand&#39;s catalog) </div> </div>
        {
          this.state.slideCount === 1 ?
            <div>
              {this.endRestart()}
              {this.timerSlide()}
              <div className="wrapper">
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Bella%20%2B%20Canvas&ln=brands-b_18"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./bellacan.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=District&ln=brands-b_4"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./district-made.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Port%20%26%20Company&ln=brands-b_1"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./pnc.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Alternative%20Apparel&ln=brands-b_16"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./alty.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Fruit%20of%20the%20Loom&ln=brands-b_24"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./fruitofloom.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Nike&ln=brands-b_9"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./nikee.png')} />
                </a>
              </div>
            </div>
            :
            null
        }
        {
          this.state.slideCount === 2 ?
            <div>
              {this.stopTimer()}
              {this.restart()}
              <div className="wrapper">
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Port%20Authority&ln=brands-b_0"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./port-authority.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Eddie%20Bauer&ln=brands-b_13"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./eddie.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=New%20Era&ln=brands-b_15"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./newera.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=OGIO&ln=brands-b_12"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./ogio.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Sport-Tek&ln=brands-b_2"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./sport-tek.png')} />
                </a>
                <a href="https://www.companycasuals.com/totalscreendesign/b.jsp?brand=Gildan&ln=brands-b_23"
                  rel="noopener noreferrer" target="_blank">
                  <img className="homephoto" src={require('./gildan.png')} />
                </a>
              </div>
            </div>
            :
            null
        }
        <div className="servicebar"> The services we offer!
          <div className="small">
            (Click on the photo to learn more about services)
          </div>
        </div>
        <div className="services">
          <img className="homephoto2" src={require('./screenprint.png')} />
          <div className="servicewords1"> Screen Print </div>
          <img className="homephoto2" src={require('./embroidery.png')} />
          <div className="servicewords2"> Embroidery </div>
          <img className="homephoto2" src={require('./dtg.png')} />
          <div className="servicewords3"> Direct To Garment </div>
          <img className="homephoto2" src={require('./graphic.png')} />
          <div className="servicewords4"> Graphic Design </div>
        </div>
        <div className="reviews">
          <div className="others"> What others have to say about our customer experience </div>
          <a href="https://www.google.com/search?q=total+screen+design&rlz=1C5CHFA_enUS780US780&oq=total+screen&aqs=chrome.0.69i59j69i60l3j69i57j0.3284j0j9&sourceid=chrome&ie=UTF-8#lrd=0x5367741663113e89:0xdeb865429cd63bd8,1,,,"
            rel="noopener noreferrer" target="_blank">
            <div className="starwrapper">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <div className="writtenreview"> Mark and his team are amazing. He goes above and beyond.
              Every. Single. Time. Outstanding all around.
              <br/>
                - Daynna Dowell
              </div>
            </div>
          </a>
          <a href="https://www.google.com/search?q=total+screen+design&rlz=1C5CHFA_enUS780US780&oq=total+screen&aqs=chrome.0.69i59j69i60l3j69i57j0.3284j0j9&sourceid=chrome&ie=UTF-8#lrd=0x5367741663113e89:0xdeb865429cd63bd8,1,,,"
            rel="noopener noreferrer" target="_blank">
            <div className="starwrapper2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <div className="writtenreview2"> A very friendly and helpful business. I was able to order some shirts for work,
                with a logo embroidered. I have worked with them before, and I have been happy with their products.
              <br/>
                - Kent Gunderson
              </div>
            </div>
          </a>
          <a href="https://www.google.com/search?q=total+screen+design&rlz=1C5CHFA_enUS780US780&oq=total+screen&aqs=chrome.0.69i59j69i60l3j69i57j0.3284j0j9&sourceid=chrome&ie=UTF-8#lrd=0x5367741663113e89:0xdeb865429cd63bd8,1,,,"
            rel="noopener noreferrer" target="_blank">
            <div className="starwrapper3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <div className="writtenreview3"> 100% friendly and helpful.  Great artwork!
                <br/>
                - Malissa Morigeau
              </div>
            </div>
          </a>
          <a href="https://www.google.com/search?q=total+screen+design&rlz=1C5CHFA_enUS780US780&oq=total+screen&aqs=chrome.0.69i59j69i60l3j69i57j0.3284j0j9&sourceid=chrome&ie=UTF-8#lrd=0x5367741663113e89:0xdeb865429cd63bd8,1,,,"
            rel="noopener noreferrer" target="_blank">
            <div className="starwrapper4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <div className="writtenreview3"> Very friendly and accommodating
                <br/>
                - Adam Wood
              </div>
            </div>
          </a>
        </div>
        <div className="footy">
          <div className="footwords">
            Website made by Rylee Andrews @2018
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(Home);
