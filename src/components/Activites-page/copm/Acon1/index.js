import React ,{Component} from 'react';
import './style.scss';
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
                                        <Tilt options={{ scale:1, max:10 }} >
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
                        <div className="col-lg-6">
                            <Fade>
                                <div className="act-con">
                                    <div className="imag-con ">
                                        <Tilt options={{ scale:1, max:10 }} >
                                            <img src={require('../../../../images/activites3.png')} className="img-fluid" alt="img"/>
                                        </Tilt>
                                    </div>
                                    <h2>المشااركة في أكثر من 100 برنامج توعوي تلفزيوني وإذاعي وصحفي خليجي</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade>
                                <div className="act-con">
                                    <div className="imag-con ">
                                        <Tilt options={{ scale:1, max:10 }} >
                                            <img src={require('../../../../images/activites5.png')} className="img-fluid" alt="img"/>
                                        </Tilt>
                                    </div>
                                    <h2>تنفيذ العديد من الدورات التدريبة وورش العمل ولقاءات توعوية في جميع المدن الخليجية</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade>
                                <div className="act-con">
                                    <div className="imag-con ">
                                        <Tilt options={{ scale:1, max:10 }} >
                                            <img src={require('../../../../images/activites4.png')} className="img-fluid" alt="img"/>
                                        </Tilt>
                                    </div>
                                    <h2>تنظيم أكثر من 18 ماراثون مشاي و مسيرة للدراجات الهوائية وإسقاط مظلي</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade>
                                <div className="act-con">
                                    <div className="imag-con">
                                        <Tilt options={{ scale:1, max:10 }} >
                                            <img src={require('../../../../images/activites5.png')} className="img-fluid" alt="img"/>
                                        </Tilt>
                                    </div>
                                    <h2>إنتاج 7 مقاطع فديو توعوية تم بثها على قناة اليوتيوب وإرسالها عبر وسائل التواصل الإجتماعي</h2>
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