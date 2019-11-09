import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class newsnav extends Component{
  render(){
        return(
            <section className="activites-nav">
                <div className="container">
                    <ul className="actnav list-unstyled">
                        <li><NavLink exact to="/news">1</NavLink></li>
                        <li><NavLink to="/news2">2</NavLink></li>
                        <li><NavLink to="/news3">3</NavLink></li>
                        <li className="more"><i className="fa fa-angle-double-left"></i></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default newsnav ;