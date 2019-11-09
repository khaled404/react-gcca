import React , {Component} from 'react';
import './style.scss';
import {Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import classnames from "classnames";
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

class Videos extends Component{
  options = {
    rtl:true,
    loop:true,
    margin:20,
    items:1,
    autoplay:true,
    center: true,
    responsive:{
        0:{
            stagePadding: 0,
        },
        768:{
            stagePadding: 200,
        },
        992:{
          stagePadding: 300,
        },
        1200:{
          stagePadding: 350,
        },
        1500:{
          stagePadding: 550,

        }

    },
  };
  state = {
    container: false
  }
  windowWidth = () =>{
    window.innerWidth < 480 ? this.setState({container:true}): this.setState({container:false});
  }
  componentDidMount(){
   this.windowWidth();
  }
  render(){
    return(
      <section className="Videos-section">
        <div className={classnames({"container":this.state.container})}>
          <Rotate top right>
            <h2 className="titel">الفيديوهات التوعوية</h2>
          </Rotate>
            <OwlCarousel options={this.options}>
              <div className="item">
                <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                  <img src={require('../../images/video.jpg')} alt="slide img" className="img-fluid" />
                </a>
              </div>
              <div className="item">
                <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                  <img src={require('../../images/video2.jpg')} alt="slide img" className="img-fluid" />
                </a>
              </div>
              <div className="item">
                <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                  <img src={require('../../images/video3.jpg')} alt="slide img" className="img-fluid" />
                </a>
              </div>
              <div className="item">
                <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                  <img src={require('../../images/video4.jpg')} alt="slide img" className="img-fluid" />
                </a>
              </div>

            </OwlCarousel>
            <div className="main-btn">
              <Bounce bottom>
                <Link to="/vidues">
                  <span>عرض المزيد</span>
                </Link>
              </Bounce>
            </div>

        </div>
      </section>
    )    
  }

}
export default Videos;
