import React  from 'react';
import Rotate from 'react-reveal/Rotate';
import RubberBand from 'react-reveal/RubberBand';
import Tilt from 'react-tilt';
const Header2016 = () =>{ 
    return(
        <div className="a2000">

            <header className="about-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Rotate top right mountOnEnter>
                            <h2>الحملة الخليجية للتوعية بالسرطان 2016</h2>
                            </Rotate>
                            <p className="top-prag">نظم المركز الخليجي لمكافحة السرطان الحملة الخليجية الثانية خلال الأسبوع الأول من فبراير 2017 م بدعم معالي وزارء الصحة بدول مجلس التعاون وبمشاركة عدد كبير من الهيئات والمنظمات الصحية الخليجية والمؤسسات التعليمية والهيئات الأهلية غير الربحية والعديد من شركاء النجاح من القطاع الخاص حيث دشنت الحملة برعاية كريمة من صاحب السمو الملكي الأمير فيصل بن بندر بن عبدالعزيز أميرمنطقة الرياض، واستمر تنفيذ أنشطة الحملة تحت شعار “40*40” بناءاً علي الدراسات التي تشير إلي أن</p>
                            <div className="bottom-prag">
                                <p><i className="fas fa-quote-right" ></i><spna>%40 من أمرض السرطان يمكن الوقاية منها باتباع نمط حياة وعادات </spna><span>غذائية صحية وممارسة النشاط البدني، في حين أن %40 أخرى يمكن شفاؤها </span><span>بأذن الله تعالى إذا ما تم تشخيصها مبكراً وخضعت للعلاج المناسب <i className="fas fa-quote-left" ></i></span> </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <RubberBand mountOnEnter delay={400}>
                                <Tilt options={{ scale:1 ,max:10}} >
                                    <img src={require('../../../../images/newsp2.png')} alt="about header" className="img-fluid"/>
                                </Tilt>
                            </RubberBand>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header2016;