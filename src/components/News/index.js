import React  from 'react';
import {Link } from 'react-router-dom';
import './style.scss';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
const News = () =>{ 
    return(
      <section className="news-section">
        <div className="container">
          <Rotate bottom right>
            <h2>آخر أخبار الحملة</h2>
          </Rotate>
          <div className="row">
            <div  className="col-lg-6">
              <Bounce bottom delay={400}>
                <div className="card-con">
                  <div className="img-box">
                    <img src={require('../../images/news1.png')} alt="news img"/>
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
              </Bounce>
            </div>
            <div  className="col-lg-6">
              <Bounce bottom delay={800}>
                <div className="card-con">
                  <div className="img-box">
                    <img src={require('../../images/news2.png')} alt="news img"/>
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
              </Bounce>
            </div>
          </div>
          <div className="main-btn">
          <Bounce bottom>
              <Link to="/news">
                <span>عرض المزيد</span>
              </Link>
            </Bounce>
          </div>
        </div>
      </section>
    )
}
export default News;
