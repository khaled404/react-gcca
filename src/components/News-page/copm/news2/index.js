import React ,{Component} from 'react';
import Fade from 'react-reveal/Fade';
import Scroll from '../../../ScrollToTop';
class news2 extends Component{
  render(){
        return(
            <div className="news-page">
                <Scroll/>
                <section className="news-section">
                    <div className="container">
                    <div className="row">
                        <div  className="col-lg-6">
                            <Fade>
                                <div className="card-con">
                                    <div className="img-box">
                                        <img src={require('../../../../images/news1.png')} alt="news img"/>
                                        <div className="date">
                                            <span>17</span>
                                            <span>مارس</span>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3>انطلاق الحملة الخليجية للتوعية بالسرطان 2017</h3>
                                        <p>دشنت الحملة برعاية كريمة من صاحب السمو الملكي الأمير فيصل بن بندر بن عبدالعزيز أمير منطقة الرياض. واستمر تنفيذ أنشاطة الحملة تحت شعار 40*40 بناءً على الدرسات التي تشايى إلى</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div  className="col-lg-6">
                            <Fade>
                                <div className="card-con">
                                    <div className="img-box">
                                        <img src={require('../../../../images/news2.png')} alt="news img"/>
                                        <div className="date">
                                            <span>17</span>
                                            <span>مارس</span>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3>المؤتمر الخليجي المشترك الأول للسرطان</h3>
                                        <p>نظم الاتحاد الخليجي لمكافحة السرطان بالتعاون مع المركز الخليجي لمكافحة السرطان المنبثق عن مجلس الصحة لدول مجلس التعاون المؤتمر الخليجي المشترك الأول للسرطان على مدى يومين في قاعة</p>
                                    </div>
                                </div>

                            </Fade>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default news2 ;