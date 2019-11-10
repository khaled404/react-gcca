import React ,{Component} from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import Scroll from '../../../ScrollToTop';
class Activites1 extends Component{
  render(){
        return(
            <section className="activites-section">
                <Scroll/>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <Fade>
                                <div className="act-con">
                                    <div className="imag-con ">
                                        <Tilt options={{ scale:1, max:10 }}>
                                            <img src={require('../../../../images/activites1.png')} className="img-fluid" alt="img"/>
                                        </Tilt>
                                    </div>
                                    <h2>تنفيذ أكثر من 580 ركن توعوي</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade>
                                <div className="act-con">
                                    <div className="imag-con ">
                                        <Tilt options={{ scale:1, max:10 }} >
                                            <img src={require('../../../../images/activites2.png')} className="img-fluid" alt="img"/>
                                        </Tilt>
                                    </div>
                                    <h2>تنفيذ مسابقة "الصحة وعي" لإنتاج أفضل فديو، لوحة تشكيلية، موشن جرافيك</h2>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Activites1 ;