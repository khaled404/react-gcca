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
                    <li><Link exact  to="/">الرئيسية</Link ></li>
                    <li><Link  to="/about">عن الحملة</Link></li>
                    <li><Link to="/range">نطاق الحملة</Link></li>
                  </ul>
                  <ul className="list-unstyled footer-navlink">
                    <li><Link to="/participants">الجهات المشاركة</Link></li>
                    <li><Link to="/activites">الفعاليات</Link></li>
                    <li><Link to="/vidues">الفيديوهات التوعوية</Link></li>
                  </ul>
                  <ul className="list-unstyled footer-navlink">
                    <li><Link to="/news">الأخبار</Link></li>
                    <li><Link to="/contact">تواصل معنا</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <ul className="list-unstyled footer-icons">
                <li>
                    <a href="#">
                      <div className="icon instagram"><i class="fab fa-instagram"></i></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon youtube"><i class="fab fa-youtube"></i></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon twitter"><i class="fab fa-twitter"></i></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon facebook"><i class="fab fa-facebook-f"></i></div>
                    </a>
                  </li>
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