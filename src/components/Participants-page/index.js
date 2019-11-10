import React ,{Component} from 'react';
import Organizers from '../about-comp/Organizers'
import Scroll from '../ScrollToTop';
class Participants extends Component{
  render(){
      return(
          <section className="participants-section">
            <Scroll/>
            <Organizers/>
          </section>
      )
  }
}
export default Participants ;
