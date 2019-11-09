import React ,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Activitesnav from './copm/news-nav';
import Index1 from './copm/news1/index';
import Index2 from './copm/news2/index';
import Index3 from './copm/news3/index';
class News extends Component{
  render(){
        return(
            <BrowserRouter>
                <Route exact path="/news" component={Index1}/>
                <Route path="/news1" component={Index1}/>
                <Route path="/news2" component={Index2}/>
                <Route path="/news3" component={Index3}/>
                <Activitesnav/>
            </BrowserRouter>
        )
    }
}
export default News ;