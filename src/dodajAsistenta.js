import React, { Component } from 'react'
import FormaAsistent from './FormaAsistent'
import FormaAsistentPred from './FormaAsistentPred'
import Prikaz from './prikazAsistenta'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajAsistenta extends Component {
    render () {
        return (
            <div className="dodajAsistenta" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Asistent</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Dodaj asistenta">
                        <FormaAsistent />
                    </Tab>

                    <Tab eventKey="profile" title="Dodaj asistenta na predmet">
                        <FormaAsistentPred />
                    </Tab>

                    <Tab eventKey="list" title="Prikaz asistenata">
                        <Prikaz />
                    </Tab>
                </Tabs>
</div>
        )
    }
}

export default DodajAsistenta