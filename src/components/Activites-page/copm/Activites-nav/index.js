import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';
class Activitesnav extends Component{
  render(){
        return(
            <section className="activites-nav">
                <div className="container">
                    <ul className="actnav list-unstyled">
                        <li><NavLink exact to="/activites">1</NavLink></li>
                        <li><NavLink to="/activites2">2</NavLink></li>
                        <li><NavLink to="/activites3">3</NavLink></li>
                        <li className="more"><i className="fa fa-angle-double-left"></i></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Activitesnav ;