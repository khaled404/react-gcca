import React ,{Component} from 'react';
import Fade from 'react-reveal/Fade'; 
import Tilt from 'react-tilt';
import Scroll from '../../../ScrollToTop';
class Vidue3 extends Component{
  render(){
        return(
            <section className="viduesbage-section">
                <Scroll/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Fade>
                                <div className="vidue-con">
                                    <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                                        <Tilt options={{ scale:1 , max:10 }}>
                                            <img src={require('../../../../images/video2.jpg')} className="img-fluid" alt="slide img" />
                                        </Tilt>
                                    </a>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade>
                                <div className="vidue-con">
                                    <a  data-fancybox="youtube" href="https://www.youtube.com/watch?v=QYr6txK4lrg" className="fans">
                                        <Tilt options={{ scale:1 , max:10 }}>
                                            <img src={require('../../../../images/video4.jpg')} className="img-fluid" alt="slide img" />
                                        </Tilt>
                                    </a>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Vidue3 ;