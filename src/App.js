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
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Loader/>
        <Nav />
        <Route path="/" component={Index}/>
        <Route exact path="/react-gcca/" component={Index}/>
        <Route path="/react-gcca/about" component={Apout} />
        <Route path="/react-gcca/range" component={Range} />
        <Route path="/react-gcca/participants" component={Participants} />
        <Route path="/react-gcca/activites" component={Activites} />
        <Route path="/react-gcca/activites2" component={Activites} />
        <Route path="/react-gcca/activites3" component={Activites} />
        <Route path="/react-gcca/news" component={News} />
        <Route path="/react-gcca/news2" component={News} />
        <Route path="/react-gcca/news3" component={News} />
        <Route path="/react-gcca/contact" component={Contact} />
        <Route path="/react-gcca/vidues" component={Viduesbage} />
        <Route path="/react-gcca/vidues2" component={Viduesbage} />
        <Route path="/react-gcca/vidues3" component={Viduesbage} />
        <Footer/>
      </BrowserRouter>
    )
  }
}
export default App;
