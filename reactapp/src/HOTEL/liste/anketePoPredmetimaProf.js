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
                <nav class="NavPadding">
                <h2 id="top">SPISAK ANKETA PO PREDMETIMA</h2>
                <div class="collapse navbar-collapse" id="navbarAnkete"> </div>
            </nav>

            <br></br>

            <table className="anketeTabela" align="center">
                    <tr>
                    <td>NAZIV ANKETE</td>
                    <td>OPIS</td>
                    <td>DATUM ISTEKA</td>
                    <td>PRIKAZ ANKETE</td>
                    <td>UREDI</td>
                    <td>OBRIŠI</td>
                    </tr>
                {items.ankete ? items.ankete.map(anketa => (
                    <tr>
                        <th>{anketa.naziv}</th>
                        <th>{anketa.opis}</th>
                        <th>{anketa.datumIstekaAnkete.substr(0,10)}</th>
                        <th><button type="button" class="btn btn-primary disabled" id="prikaziButton">PRIKAŽI</button></th>
                        <th><button type="button" class="btn btn-primary disabled" id="urediButton">UREDI</button></th>
                        <th><button type="button" class="btn btn-primary disabled" id="obrisiButton">OBRIŠI</button></th>
                    </tr>
                )) : "Loading..."}
                </table>
                <a href="#top"><button type="button" class="btn btn-primary disabled" id="nazadNaVrhButton">NAZAD NA VRH</button></a>
            </div>
        )
    }
    componentDidMount() { 
        fetch(url + '/dajAnketeZaProfesoraPoPredmetima?idProfesora=1', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            let niz = []
            for(let key in result.ankete) {
                niz = niz.concat(result.ankete[key].ankete)
            }
            this.setState({
                items: {
                    ankete: niz
                }
            })
        }, error => {
            this.setState({
                items: [error, "error"]
            })
        })
    }
}

export default App;