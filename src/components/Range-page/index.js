import React ,{Component} from 'react';
import './style.scss';
import Flip from 'react-reveal/Flip';
import Tilt from 'react-tilt';
import Scroll from '../ScrollToTop';
class Range extends Component{
  render(){
    return(
      <section className="range-section">
        <Scroll/>
          <div className="container">
              <div className="content">
                <Flip top>
                    <h2>يمتد نطاق الحملة إلي جميع عواصم دول مجلس التعاون بالإضافة إلي العديد من المدن الأخري في كبري البلاد العربية</h2>
                </Flip>
                <div className="flags">
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range1.png')} alt="flag"/>
                        </Tilt>
                        <h3>المملكة العربية السعودية</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range2.png')} alt="flag"/>
                        </Tilt>
                        <h3>الإمارات العربية المتحدة</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range3.png')} alt="flag"/>
                        </Tilt>
                        <h3>الكويت</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>

                    </div>
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range4.png')} alt="flag"/>
                        </Tilt>
                        <h3>قطر</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range5.png')} alt="flag"/>
                        </Tilt>
                        <h3>البحرين</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>

                    </div>
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range6.png')} alt="flag"/>
                        </Tilt>
                        <h3>سلطنة عمان</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>

                    </div>
                    <div className="flag">
                        <Tilt options={{ scale:1.1 }} >
                            <img src={require('../../images/range7.png')} alt="flag"/>
                        </Tilt>
                        <h3>الجمهورية اليمنية</h3>
                        <div className="flag-list">
                            <ul>
                                <li>مكة المكرمة</li>
                                <li>المدينة المنورة </li>
                                <li>الرياض</li>
                                <li>جدة</li>
                                <li>الطائف</li>
                                <li>الدمام</li>
                            </ul>
                            <ul>
                                <li>الأحساء</li>
                                <li>القطيف</li>
                                <li>المجمعة</li>
                                <li>بريدة</li>
                                <li>عنيزة</li>
                                <li>المذنب</li>
                            </ul>
                            <ul>
                                <li>حائل</li>
                                <li>تبوك </li>
                                <li>الحدود الشمالية</li>
                                <li>حفر الباطن</li>
                                <li>أبها</li>
                                <li>النماص</li>
                            </ul>
                            <ul>
                                <li>الخبر</li>
                                <li>بطين </li>
                                <li>بارق</li>
                                <li>جيزان</li>
                            </ul>
                        </div>

                    </div>
                </div>
              </div>
          </div>
      </section>
    )
  }
}
export default Range ;