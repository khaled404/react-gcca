/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import './style.scss';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Rotate from 'react-reveal/Rotate';

class Sponsers extends Component {
  options = {
    rtl:true,
    loop:true,
    margin:10,
    items:8,
    autoplay:true,
    responsive:{
      0:{
          items:3,

      },
      768:{
          items:5
      },
  },

  } 
  content = () => {
    if (window.innerWidth > 991) {
      return (
        <Fragment>
          <Rotate top right delay={2200}>
            <a href="#"><img src={require('../../images/sponser1.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={2000}>
            <a href="#"><img src={require('../../images/sponser2.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={1800}>
            <a href="#"><img src={require('../../images/sponser3.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={1400}>
            <a href="#"><img src={require('../../images/sponser4.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={1200}>
            <a href="#"><img src={require('../../images/sponser5.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={1000}>
            <a href="#"><img src={require('../../images/sponser6.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={800}>
            <a href="#"><img src={require('../../images/sponser7.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={600}>
            <a href="#"><img src={require('../../images/sponser8.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={400}>
            <a href="#"><img src={require('../../images/sponser9.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right delay={200}>
            <a href="#"><img src={require('../../images/sponser10.png')} alt="Sponser img" /></a>
          </Rotate>
          <Rotate top right >
            <a href="#"><img src={require('../../images/sponser11.png')} alt="Sponser img" /></a>
          </Rotate>
 
        </Fragment>
      )
    } else {
      return (
        <OwlCarousel options={this.options}>
            <div className="item"><a href="#"><img src={require('../../images/sponser1.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser2.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser3.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser4.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser5.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser6.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser7.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser8.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser9.png')} alt="Sponser img"  className="img-fluid"/></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser10.png')} alt="Sponser img" className="img-fluid" /></a></div>
            <div className="item"><a href="#"><img src={require('../../images/sponser11.png')} alt="Sponser img" className="img-fluid" /></a></div>
        </OwlCarousel>
      )
    }
  }
  render() {
    return (
      <section className="sponsers-section">
        <div className="container">
          <div className="sponsers-containrt">
            {this.content()}
          </div>
        </div>
      </section>
    )
  }
}
export default Sponsers;