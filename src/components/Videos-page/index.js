import React ,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Nav from './copm/vidue-nav';
import Index1 from './copm/vidue1/index';
import Index2 from './copm/vidue2/index';
import Index3 from './copm/vidue3/index';
import Scroll from '../ScrollToTop';
class Viduesbage extends Component{
  render(){
        return(
            <BrowserRouter>
                <Scroll/>
                <Route exact path="/vidues" component={Index1}/>
                <Route path="/vidues2" component={Index2}/>
                <Route path="/vidues3" component={Index3}/>
                <Nav/>
            </BrowserRouter>
        )
    }
}
export default Viduesbage ;