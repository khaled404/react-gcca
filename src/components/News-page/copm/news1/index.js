import React ,{Component} from 'react';
import Fade from 'react-reveal/Fade'; 
import Scroll from '../../../ScrollToTop';

class news1 extends Component{
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
                                        <img src={require('../../../../images/newsp1.png')} alt="news img"/>
                                        <div className="date">
                                            <span>17</span>
                                            <span>مارس</span>
                                        </div>
                                    </div>
                                        <div className="caption">
                                            <h3>مسيرة القافلة الوردية السابعة بدولة الإمارات</h3>
                                            <p>استطاعت القافلة الوردية كشريك نجاح للحملة أن تقدم الفحوصات المجانية وأجرت فحوصات الكشف المبكر عن مرض سرطان الثدي ل 7207 شخاص من الرجال والنساء في مختلف أنحاء دولة الإمارات</p>
                                        </div>
                                    </div>
                            </Fade>
                            </div>
                            <div  className="col-lg-6">
                                <Fade>
                                    <div className="card-con">
                                        <div className="img-box">
                                            <img src={require('../../../../images/newsp2.png')} alt="news img"/>
                                            <div className="date">
                                                <span>04</span>
                                                <span>ابريل</span>
                                            </div>
                                        </div>
                                            <div className="caption">
                                                <h3>المؤتمر الخليجي المشترك الأول للسرطان</h3>
                                                <p>نظم الاتحاد الخليجي لمكافحة السرطان بالتعاون مع المركز الخليجي لمكافحة السرطان المنبثق عن مجلس الصحة لدول مجلس التعاون المؤتمر الخليجي المشترك الأول للسرطان على مدى يومين في قاعة </p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div  className="col-lg-6">
                                <Fade>
                                    <div className="card-con">
                                        <div className="img-box">
                                            <img src={require('../../../../images/newsp3.png')} alt="news img"/>
                                            <div className="date">
                                                <span>17</span>
                                                <span>مارس</span>
                                            </div>
                                        </div>
                                        <div className="caption">
                                            <h3>مسيرة القافلة الوردية السابعة بدولة الإمارات</h3>
                                            <p>استطاعت القافلة الوردية كشريك نجاح للحملة أن تقدم الفحوصات المجانية وأجرت فحوصات الكشف المبكر عن مرض سرطان الثدي ل 7207 شخاص من الرجال والنساء في مختلف أنحاء دولة الإمارات</p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div  className="col-lg-6">
                                <Fade>
                                    <div className="card-con">
                                        <div className="img-box">
                                            <img src={require('../../../../images/newsp4.png')} alt="news img"/>
                                            <div className="date">
                                                <span>04</span>
                                                <span>ابريل</span>
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
export default news1 ;