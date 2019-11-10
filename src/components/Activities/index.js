import React  from 'react';
import {Link } from 'react-router-dom';
import './style.scss';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide'; 
import Tilt from 'react-tilt';
const Activities = () =>{ 
    return(
      <section className="activities-section">
        <div className="container">
          <div className="titel">
            <Rotate bottom right  >
              <h2>أهم أنشطة وفعاليات الحملة التوعوية</h2>
            </Rotate>
            <Slide right delay={400}>
              <p>تجاوز عدد الأنشطة خلال الحملة 1000+ نشاط منها</p>
            </Slide>
          </div>
          <div className="act-con">
          <div className="row">
              <div className="col-lg-6  order-lg-1 order-2">
                <Tilt options={{ scale:1 , max:10 }} >
                  <div className="image-con">
                    <Slide bottom delay={400}>
                      <img src={require('../../images/activities1.png')} alt="activities img" className="img-fluid"/>
                    </Slide>
                  </div>
                </Tilt>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="act-titel">
                  <Slide bottom delay={400} offsetTop={5000}>
                    <h2>تنفيذ أكثر من 580 ركن توعوي</h2>
                  </Slide>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="act-titel center">
                  <Slide bottom>
                    <h2>
                      تنفيذ العديد من الدورات التدريبية وورش العمل
                      <span>واللقاءات التوعوية في جميع المدن الخليجية</span>
                    </h2>
                  </Slide>
                </div>
              </div>
              <div className="col-lg-6">
                <Tilt options={{ scale:1 , max:10 }} >
                  <div className="image-con center">
                    <Slide bottom>
                      <img src={require('../../images/activities2.png')} alt="activities img" className="img-fluid" />
                    </Slide>
                  </div>
                </Tilt>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 order-lg-1 order-2">
                <Tilt options={{ scale:1 , max:10 }} >
                  <div className="image-con">
                    <Slide bottom>
                      <img src={require('../../images/activities3.png')} alt="activities img" className="img-fluid"/>
                    </Slide>
                  </div>
                </Tilt>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="act-titel">
                  <Slide bottom>
                    <h2>
                      تنظيم أكثر من 18 ماراثون مشي ومسيرة
                      <span>للدراجات الهوائية وإسقاط مظلي</span>
                    </h2>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
          <div className="main-btn">
            <Slide bottom>
              <Link to="/activites">
                <span>عرض المزيد</span>
              </Link>
            </Slide>
          </div>
        </div>
      </section>
    )
}
export default Activities;