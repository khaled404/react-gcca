import React  from 'react';
import './style.scss';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

const Goals = () =>{ 
  return(
    <section className="goals-section" id="goals">
      <div className="container">
        <Rotate bottom right>
          <h2>أهداف الحملة</h2>
        </Rotate>
          <div className="content-top">
          <Flip  left delay={400}>
              <div className="con">
                <div className="circle">
                  <p>
                    <span>رفع مستوى الوعي</span>
                    <span>الصحي حول عوامل</span>
                    <span>الإختطار المؤدية للإصابة</span>
                    <span>بالسرطان</span>
                  </p>
                </div>
              </div>
          </Flip >
          <Flip  left delay={800}>
            <div className="con">
              <div className="circle">
                <p>
                  <span>تشجيع اتباع نمط</span>
                  <span>غذائي صحي وممارسة</span>
                  <span>النشااط البدني بين</span>
                  <span>جميع فئات المجتمع</span>
                </p>
              </div>
            </div>
          </Flip >
          <Flip  left delay={1200}>
            <div className="con">
              <div className="circle">
                <p>
                  <span>رفع مستوى الوعي</span>
                  <span>الصحي حول طرق الكشف</span>
                  <span>المبكر عن السرطان وأهميتها</span>
                  <span>في تحسين فرص الشافاء</span>
                </p>
              </div>
            </div>
           </Flip>
          </div>
        <Bounce bottom cascade>
          <div className="content-botton">
            <div className="square">
              <div className="num"><span>+</span>100</div>
              <p>
                <span>اشترك في الحملة العديد من الوزارات والإمارات</span>
                <span>والجمعيات الأهلية والفرق التطوعية</span>
                <span>والجامعات والمؤسسات التعليمية وقطاعات الصحة</span>
                <span>الأهلية</span>
              </p>
            </div>
            <div className="square">
            <div className="num"><span>+</span>34</div>
              <p>
                <span>يمتد نطاق الحملة إلي جميع عواصم دول مجلس</span>
                <span>التعاون بالإضافة إلي العديد من المدن الأخري في</span>
                <span>كبري البلاد العربية كالمملكة العربية السعودية</span>
                <span>والإمارات العربية المتحدة</span>
              </p>
            </div>
          </div>

        </Bounce>
      </div>
    </section>
  )
}
export default Goals;
/*

        



              
              
              


*/