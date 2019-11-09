import React ,{Component} from 'react';
import Goals from '../Goals';
import Header from '../about-comp/Header';
import Organizers from '../about-comp/Organizers'
class Apout extends Component{
  render(){
    return(
      <div className="about">
        <Header/>
        <Goals/>
        <Organizers/>
      </div>
    )
  }
}
export default Apout;
