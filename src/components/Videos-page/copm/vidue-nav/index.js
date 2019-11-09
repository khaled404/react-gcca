import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Viduesnav extends Component{
  render(){
        return(
            <section className="activites-nav">
                <div className="container">
                    <ul className="actnav list-unstyled">
                        <li><NavLink exact to="/vidues">1</NavLink></li>
                        <li><NavLink to="/vidues2">2</NavLink></li>
                        <li><NavLink to="/vidues3">3</NavLink></li>
                        <li className="more"><i className="fa fa-angle-double-left"></i></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Viduesnav ;