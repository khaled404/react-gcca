import React ,{Component , Fragment } from 'react';
import Header from '../Header';
import Goals from '../Goals';
import Activities from '../Activities';
import News from '../News';
import Videos from '../Videos';
import Sponsers from '../Sponsers';
class index extends Component{
  render(){
    return(
      <Fragment>
        <Header/>
        <Goals />
        <Activities/>
        <News/>
        <Videos/>
        <Sponsers/>
      </Fragment>
    )
  }
}
export default index;
