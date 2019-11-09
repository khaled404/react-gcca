/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';
import './style.scss';
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';
import RubberBand from 'react-reveal/RubberBand';

const Organizers = () =>{ 
    return(
        <section className="organizers-section">
            <div className="container">
                <div className="content">
                    <LightSpeed right>
                        <h2>الجهات المنظمة</h2>
                    </LightSpeed>
                    <div className="logos-top logos">
                        <Rotate top right delay={800}>
                            <a href="#">
                                <img src={require('../../../images/organizers1.png')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={1000}>
                            <a href="#">
                                <img src={require('../../../images/organizers2.png')} alt="logo"/>
                            </a>
                        </Rotate>

                    </div>
                </div>
                <div className="content">
                    <LightSpeed right delay={800}>
                        <h2>الجهات الاشرافية</h2>
                    </LightSpeed>

                    <div className="logos-top logos">
                    <Rotate top right delay={800}>
                        <a href="#">
                            <img src={require('../../../images/organizers3.png')} alt="logo"/>
                        </a>
                    </Rotate>
                    <Rotate top right delay={1000}>
                        <a href="#">
                            <img src={require('../../../images/organizers4.png')} alt="logo"/>
                        </a>
                    </Rotate>

                    </div>
                </div>
                <div className="content">
                    <div className="logos">
                        <Rotate top right delay={1000}>
                            <a href="#">
                                <img src={require('../../../images/organizers5.png')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={1200}>
                            <a href="#">
                                <img src={require('../../../images/organizers6.png')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={1400}>
                            <a href="#">
                                <img src={require('../../../images/organizers7.png')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={1600}>
                            <a href="#">
                                <img src={require('../../../images/organizers8.png')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={1800}>
                            <a href="#">
                                <img src={require('../../../images/organizers9.jpg')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={2000}>
                            <a href="#">
                                <img src={require('../../../images/organizers10.jpg')} alt="logo"/>
                            </a>
                        </Rotate>
                        <Rotate top right delay={2200}>
                            <a href="#">
                                <img src={require('../../../images/organizers11.png')} alt="logo"/>
                            </a>
                        </Rotate>
                    </div>
                </div>
                <div className="content">
                    <LightSpeed right delay={2000}>
                        <h2>الراعي التقني</h2>
                    </LightSpeed>
                    <div className="logos">
                        <RubberBand delay={2000}>
                            <a href="#">
                                <img src={require('../../../images/organizers12.png')} alt="logo"/>
                            </a>
                        </RubberBand>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Organizers;