import React  from 'react';
import './style.scss';
import Rotate from 'react-reveal/Rotate';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import Tilt from 'react-tilt';
const Header = () =>{ 
    return(
        <header className="about-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Rotate top right mountOnEnter>
                            <h2>الحملة الخليجية للتوعية بالسرطان</h2>
                        </Rotate>
                        <p className="top-prag">نظم المركز الخليجي لمكافحة السرطان الحملة الخليجية الثانية خلال الأسبوع الأول من فبراير 2017 م بدعم معالي وزارء الصحة بدول مجلس التعاون وبمشاركة عدد كبير من الهيئات والمنظمات الصحية الخليجية والمؤسسات التعليمية والهيئات الأهلية غير الربحية والعديد من شركاء النجاح من القطاع الخاص حيث دشنت الحملة برعاية كريمة من صاحب السمو الملكي الأمير فيصل بن بندر بن عبدالعزيز أميرمنطقة الرياض، واستمر تنفيذ أنشطة الحملة تحت شعار “40*40” بناءاً علي الدراسات التي تشير إلي أن</p>
                        <div className="bottom-prag">
                            <p><i className="fas fa-quote-right" ></i><spna>%40 من أمرض السرطان يمكن الوقاية منها باتباع نمط حياة وعادات </spna><span>غذائية صحية وممارسة النشاط البدني، في حين أن %40 أخرى يمكن شفاؤها </span><span>بأذن الله تعالى إذا ما تم تشخيصها مبكراً وخضعت للعلاج المناسب <i className="fas fa-quote-left" ></i></span> </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <RubberBand mountOnEnter delay={400}>
                            <Tilt options={{ scale:1 }} >
                                <img src={require('../../../images/about-header.png')} alt="about header" className="img-fluid"/>
                            </Tilt>
                        </RubberBand>
                    </div>
                </div>
            </div>
            <Bounce right>
                <div className="see">
                    <div className="container">
                        <div className="content">
                            <h3>
                                <img src={require('../../../images/eye.png')} alt="eye icon"/>
                                <span>الرؤية</span>
                                <i className="fa fa-caret-left"></i>
                            </h3>
                            <p>تعزيز الوعي الصحي وحماية المجتمع الخليجي من أخطار السرطان</p>
                        </div>
                    </div>
                </div>
            </Bounce>
            <Bounce right delay={600}>
                <div className="massage">
                    <div className="container">
                        <div className="content">
                            <h3>
                                <img src={require('../../../images/massage.png')} alt="massage icon"/>
                                <span>الرسالة</span>
                                <i className="fa fa-caret-left"></i>
                            </h3>
                            <p>توطيد العلاقة بين جميع فئات المجتمع في نشر الوعي الصحي من خلال إعداد وتنفيذ برامج وأنشطة مشتركة ذات مهنية وحرفية عالية في مكافحة السرطان والوقاية منه</p>
                        </div>
                    </div>
                </div>
            </Bounce>

        </header>
    )
}
export default Header;