import React, { Component } from 'react';
import './stil.css';
import MojeAnkete from './mojeAnkete'
import PopunjeneAnketeAdmin from './popunjeneAnketeAdmin'
import JavneAnkete from './javneAnkete'
import AnketePoPredmetimaProf from './anketePoPredmetimaProf'
import RezultatiAnketaKorisnik from './rezultatiAnketaKorisnik'
import SveAnketeSviPredmetiAdmin from './sveAnketeSviPredmetiAdmin'
import PopunjeneAnketeProf from './popunjeneAnketeProf'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route exact path ="/hotel/liste" component={MojeAnkete} /> 
          <Route path="/hotel/liste/mojeAnkete" component={MojeAnkete}/>
          <Route path="/hotel/liste/popunjeneAnketeAdmin" component={PopunjeneAnketeAdmin}/>
          <Route path="/hotel/liste/javneAnkete" component={JavneAnkete}/>
          <Route path="/hotel/liste/anketePoPredmetimaProf" component={AnketePoPredmetimaProf}/>
          <Route path="/hotel/liste/rezultatiAnketaKorisnik" component={RezultatiAnketaKorisnik}/>
          <Route path="/hotel/liste/sveAnketeSviPredmetiAdmin" component={SveAnketeSviPredmetiAdmin}/>
          <Route path="/hotel/liste/popunjeneAnketeProf" component={PopunjeneAnketeProf}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;