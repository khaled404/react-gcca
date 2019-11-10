import React ,{Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/Index';
import Apout from './components/About-page';
import Range from './components/Range-page';
import Participants from './components/Participants-page';
import Activites from './components/Activites-page/index';
import News from './components/News-page/index';
import Contact from './components/Contact';
import Viduesbage from './components/Videos-page/index';
import Loader from './components/Loader';
import A2016 from './components/about-comp/about-activites/2016';
import A2017 from './components/about-comp/about-activites/2017';
import A2018 from './components/about-comp/about-activites/2018';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Loader/>
        <Nav />
        <Route exact path="/" component={Index}/>
        <Route path="/react-gcca/" component={Index}/>
        <Route path="/about" component={Apout} />
        <Route path="/range" component={Range} />
        <Route path="/participants" component={Participants} />
        <Route path="/activites" component={Activites} />
        <Route path="/activites2" component={Activites} />
        <Route path="/activites3" component={Activites} />
        <Route path="/news" component={News} />
        <Route path="/news2" component={News} />
        <Route path="/news3" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/vidues" component={Viduesbage} />
        <Route path="/vidues2" component={Viduesbage} />
        <Route path="/vidues3" component={Viduesbage} />
        <Route path="/2016" component={A2016} />
        <Route path="/2017" component={A2017} />
        <Route path="/2018" component={A2018} />
        <Footer/>
      </BrowserRouter>
    )
  }
}
export default App;
