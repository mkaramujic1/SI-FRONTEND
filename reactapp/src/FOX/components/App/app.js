import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Predmet from '../Predmet/Predmet';
import DanDatum from '../DanDatum/DanDatum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isPocetna={true}/>
        <h1>Početna stranica</h1>
        <DanDatum/>
        <Predmet/>  
        <Footer/>
      </div>
    );
  }
}

export default App;