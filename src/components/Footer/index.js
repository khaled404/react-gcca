/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';
import {Link, NavLink } from 'react-router-dom';
import './style.scss';
import RubberBand from 'react-reveal/RubberBand';
const Footer = () =>{ 
    return(
      <footer className="footer">
        <div className="container">
          <div className="footer-navtop">
            <div className="row">
              <div className="col-lg-3">
                <RubberBand>
                  <Link to="/" className="footer-logo">
                    <img src={require('../../images/logo-footer.png')} alt="footer logo" className="img-fluid logo"/>
                  </Link>
                </RubberBand>
              </div>
              <div className="col-lg-6">
                <div className="footer-links-con">
                  <ul className="list-unstyled footer-navlink">
                    <li><NavLink exact  to="/">الرئيسية</NavLink ></li>
                    <li><NavLink  to="/about">عن الحملة</NavLink></li>
                    <li><NavLink to="/range">نطاق الحملة</NavLink></li>
                  </ul>
                  <ul className="list-unstyled footer-navlink">
                    <li><NavLink to="/participants">الجهات المشاركة</NavLink></li>
                    <li><NavLink to="/activites">الفعاليات</NavLink></li>
                    <li><NavLink to="/vidues">الفيديوهات التوعوية</NavLink></li>
                  </ul>
                  <ul className="list-unstyled footer-navlink">
                    <li><NavLink to="/news">الأخبار</NavLink></li>
                    <li><NavLink to="/contact">تواصل معنا</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <ul className="list-unstyled footer-icons">
                  <li><a href="#"><img src={require('../../images/social1.png')} alt="icon" className="img-fluid"/></a></li>
                  <li><a href="#"><img src={require('../../images/social2.png')} alt="icon" className="img-fluid"/></a></li>
                  <li><a href="#"><img src={require('../../images/social3.png')} alt="icon" className="img-fluid"/></a></li>
                  <li><a href="#"><img src={require('../../images/social4.png')} alt="icon" className="img-fluid"/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copy">
            <p>جميع الحقوق محفوظة &copy; الحملة الخليجية للتوعية بالسرطان 2018</p>
            <a href="#"><img src={require('../../images/tasawk.png')} alt="tasawk img"/> </a>
          </div>
        </div>
      </footer>
    )
}
export default Footer;