import React , {Component} from 'react';
import './style.scss';
window.onload = ()=>{
    const a = document.querySelector(".loader");
    a.remove() 
}
class Loader extends Component{
    render(){
        return(
            <div className="loader">
                <svg>
                    <circle cx="70" cy="70" r="70" strokeWidth="7"></circle>
                </svg>
            </div>
        )
        
    }
 }
export default Loader;