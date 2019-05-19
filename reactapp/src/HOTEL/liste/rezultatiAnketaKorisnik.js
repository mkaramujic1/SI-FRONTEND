import React from 'react';
import url from '../url'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        }
    }
    render() {
        const items = this.state.items
        return (
            <div>          
            <nav class="NavPadding" >
                <h2 id="top">REZULTATI ANKETA</h2>
                <div class="collapse navbar-collapse" id="navbarAnkete"> </div>
            </nav>

            <br></br>
                <table class="anketeTabela" align="center">
                    <tr>
                    <td>NAZIV ANKETE</td>
                    <td>OPIS</td>
                    <td>DATUM ISTEKA</td>
                    <td>PRIKAZ REZULTATA</td>
                    </tr>
            

                {items.ankete ? items.ankete.map(anketa => (
                    <tr>
                    <th>{anketa.naziv}</th>
                    <th>{anketa.opis}</th>
                    <th>{anketa.datumIstekaAnkete.substr(0,10)}</th>
                    <th><button type="button" class="btn btn-primary disabled" id="prikaziButton">PRIKAŽI</button></th>
                    </tr>
                )) : "Loading..."}
                </table>
                <a href="#top"><button type="button" class="btn btn-primary disabled" id="nazadNaVrhButton">NAZAD NA VRH</button></a>
            </div>
        )
    }
    componentDidMount() { 
        fetch(url + '/dajSveAnketeZaKojePostojeRezultati?idUloga=1', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            this.setState({
                items: result
            })
        }, error => {
            this.setState({
                items: [error, "error"]
            })
        })
    }
}

export default App;