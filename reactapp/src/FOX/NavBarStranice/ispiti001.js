import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar001 from '../Navbar001';

class ispiti001 extends Component {
  render() {
    return (
      <div className="ispiti001">
        <Header/>
        <br></br>
        <h1>Stranica predmeta</h1>
        <br></br>
        <Navbar001/>
        <h1>FUNKCIONALNOST ZA ISPITI OPCIJU - cekamo podatke</h1>
        <Footer/>
      </div>
    );
  }
}

export default ispiti001;