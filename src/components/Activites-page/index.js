import React ,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Activitesnav from './copm/Activites-nav';
import Index1 from './copm/Acon1/index';
import Index2 from './copm/Acon2/index';
import Index3 from './copm/Acon3/index';
class Activites extends Component{
  render(){
        return(
            <BrowserRouter>
                <Route exact path="/activites" component={Index1}/>
                <Route path="/activites1" component={Index1}/>
                <Route path="/activites2" component={Index2}/>
                <Route path="/activites3" component={Index3}/>
                <Activitesnav/>
            </BrowserRouter>
        )
    }
}
export default Activites ;