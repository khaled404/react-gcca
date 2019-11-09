import React  from 'react';
import './style.scss';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import RubberBand from 'react-reveal/RubberBand';
import Tilt from 'react-tilt';

const Header = () =>{ 
    return(
      <header className="main-header">
        <img src={require('../../images/back1.png')} className="patrn" alt="patrn"/>
        <a href="#goals" className="scroll-header">
          <span></span>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h1>
                <Rotate top right mountOnEnter>
                  <span>الحملة الخليجية للتوعية بالسرطان</span>
                </Rotate>
                <Zoom left cascade mountOnEnter>
                  <span>ssenerawA recnaC rof nigapmaC fluG</span>
                </Zoom>
  
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <RubberBand mountOnEnter>
                <div className="vidue">
                  <Tilt options={{ scale:1 }} >
                    <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                      <img src={require('../../images/video.jpg')} className="img-fluid" alt="slide img" />
                    </a>
                    {/* <iframe width="100%" height="300" src="https://www.youtube.com/embed/QYr6txK4lrg" title="frem" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                  </Tilt>
                </div>

              </RubberBand>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header;
