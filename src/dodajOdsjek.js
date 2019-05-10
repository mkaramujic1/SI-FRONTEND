import React, { Component } from 'react'
import Forma from './FormaOdsjek'
import Prikaz from './prikazOdsjeka'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajOdsjek extends Component {
    render () {
        return (
            <div className="dodajStudenta" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Odsjek</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab eventKey="home" title="Dodaj odsjek">
                    <Forma />
                </Tab>

                <Tab eventKey="profile" title="Prikaz odsjeka">
                    <Prikaz />
                </Tab>
            </Tabs>
                
            </div>
        )
    }
}

export default DodajOdsjek