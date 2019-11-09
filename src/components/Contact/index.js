import React ,{Component} from 'react';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import './style.scss';
class Contact extends Component{
  render(){
        return(
            <section className="contact-section">
                <div className="container">
                    <Rotate top right mountOnEnter>
                        <h2>يسعدنا دائما تواصلكم ومشاركتنا الأنشطة التوعوية</h2>
                    </Rotate>
                    <div className="row">
                        <div className="col-lg-6">
                            <Bounce right cascade>
                                <form>
                                    <div>
                                        <label htmlFor="name">الاسم بالكامل<span>*</span></label>
                                        <input type="text" id="name" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="name">رقم الجوال<span>*</span></label>
                                        <input type="number" id="name" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="name">البريد الإلكتروني<span>*</span></label>
                                        <input type="email" id="name" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="massage">نص الرسالة<span> (لا يقل عن 100 حرف) </span></label>
                                        <textarea id="massage" required />
                                        <button type="submit">إرسال</button>
                                    </div>
                                </form>
                            </Bounce>

                        </div>
                        <div className="col-lg-6">
                            <Bounce left cascade>

                                <div className="content">
                                    <div className="info">
                                        <i className="fas fa-home"></i>

                                        <p> 
                                            مستشفى الملك فيصل التخصصي ومركز الابحاث
                                            <span className="bar"><span>الرياض:</span> 11211 <span>- ص.ب:</span> 3354 - بريد داخلي: 03</span>
                                        </p>
                                    </div>
                                    <div className="info">
                                        <i className="fas fa-phone"></i>

                                        <p> 
                                            <span>الرقم الرئيسي:</span>
                                            +966-11-4647272
                                            <span className="bar"><span>تحويلة:</span> 31907 “إلغاء رقم مسؤول الحملة”</span>
                                        </p>
                                    </div>
                                    <div className="info">
                                        <i className="fas fa-mobile-alt"></i>

                                        <p> 
                                            +966-504399441
                                        </p>
                                    </div>
                                    <div className="info">
                                        <i className="far fa-envelope"></i>
                                        <p> gcccp@kfshrc.edu.sa</p>
                                    </div>
                                </div>
                            </Bounce>


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact ;