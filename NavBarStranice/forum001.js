import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../Footer/Footer';
import Navbar001 from '../Navbar/Navbar001';

class forum001 extends Component {
  render() {
    return (
      <div className="forum001">
        <Header/>
        <br></br>
        <h1>Stranica predmeta</h1>
        <br></br>
        <Navbar001/>
        <h1>FUNKCIONALNOST ZA FORUM OPCIJU - cekamo podatke</h1>
        <Footer/>
      </div>
    );
  }
}

export default forum001;
