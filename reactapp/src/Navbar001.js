import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navbar001 extends Component {
    render() {
      return (
        <Nav className="navbar001_class">
            <Nav.Link href="student">Student</Nav.Link>
            <Nav.Link href="unos_podataka">Unos podataka</Nav.Link>
            <Nav.Link href="ispiti">Ispiti</Nav.Link>
            <Nav.Link href="obavijesti">Obavijesti</Nav.Link>
            <Nav.Link href="zadace">Zadace</Nav.Link>
            <Nav.Link href="ankete">Ankete</Nav.Link>
        </Nav>
      );
    }
  }
  
  export default Navbar001;