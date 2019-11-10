import React, { Component , Fragment} from "react";
import {Link, NavLink } from 'react-router-dom';
import classnames from "classnames";
import './style.scss';
class Navpar extends Component{
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true,
    searhActive:false,
    navActive:false,
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  navtoggle = () =>{
    this.state.navActive === true ?
        this.setState({navActive:false})
      :
        this.setState({navActive:true})
  }
  render(){
    return(
      <Fragment>
          <div className={classnames("phonenav",{
            "active": this.state.navActive,
          })}>
            <button  onClick={()=>{this.navtoggle()}}>
                <span></span>
                <span></span>
            </button>
              <ul className="nav-links list-unstyled">
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/">الرئيسية</Link ></li>
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/about">عن الحملة</Link></li>
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/range">نطاق الحملة</Link></li>
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/participants">الجهات المشاركة</Link></li>
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/activites">الأنشطة التوعوية</Link></li>
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/news">المركز الإعلامي</Link></li>
                <li onClick={()=>{this.navtoggle()}}><Link to="/react-gcca/contact">تواصل معنا</Link></li>
              </ul>
          </div>
          {/* strat main nav */}
          <nav className={classnames("navbar fixed-top",{
            "active": !this.state.visible,
          })}>
            <div className="container">
              <div className="nav-torger">
                  <button  onClick={()=>{this.navtoggle()}} className={classnames({"active":this.state.navActive})}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
              </div>
              <div className="logo">
                <Link to="/react-gcca/">
                  <img src={require('../../images/logo.png')} alt="logo" name="logo" />
                </Link>
              </div>
              <ul className="nav-links">
                <li className="mainLink"><NavLink exact  to="/">الرئيسية</NavLink ></li>
                <li className="mainLink sub-con"><NavLink  to="/about">عن الحملة</NavLink>
                  <ul className="sub-links">
                    <li><Link to="/react-gcca/">حملة 2016</Link></li>
                    <li><Link to="/react-gcca/">حملة 2017</Link></li>
                    <li><Link to="/react-gcca/">حملة 2018</Link></li>
                  </ul>
                </li>
                <li className="mainLink"><NavLink to="/react-gcca/range">نطاق الحملة</NavLink></li>
                <li className="mainLink"><NavLink to="/react-gcca/participants">الجهات المشاركة</NavLink></li>
                <li className="mainLink"><NavLink to="/react-gcca/activites">الأنشطة التوعوية</NavLink></li>
                <li className="mainLink"><NavLink to="/react-gcca/news">المركز الإعلامي</NavLink></li>
                <li className="mainLink"><NavLink to="/react-gcca/contact">تواصل معنا</NavLink></li>
              </ul>
              <div className="searh-torger">
                <button onClick={()=>{this.setState({searhActive:true})}}><i className="fa fa-search"></i></button>
              </div>
            </div>
          </nav>
          <div className={classnames("popup-searh",{"active": this.state.searhActive})}>
            <button className="toggel" onClick={()=>{this.setState({searhActive:false})}}>
              <span></span>
              <span></span>
            </button>
            <div className="searh-con">
              <button ><i className="fa fa-search"></i></button>
              <input type="text" placeholder="كلمه البحث"/>
            </div>
          </div>
      </Fragment>
    )
  }
}
export default Navpar;