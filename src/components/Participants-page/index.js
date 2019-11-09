import React ,{Component} from 'react';
import Organizers from '../about-comp/Organizers'

class Participants extends Component{
  render(){
      return(
          <section className="participants-section">
            <Organizers/>
          </section>
      )
  }
}
export default Participants ;
