import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import KreiranjeZadace from './kreiranjeZadace';

class AzuriranjeZadace extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          idPredmeta: "",
          radnja: "",
          naziv: "",
          datum: "",
          vrijeme: "",
          postavka: "",
          brojZadataka: "",
          sviTipoviIsti: "",
          listaTipova: "",
          sviBodoviIsti: "",
          listaBodova: "",
          ukupnoBodova: "",
          }
        }
    
    setAllState = () => {
        // poziv na bazu i popunjavanje state-a
    }

    render() {
        return(
        <div>
            <BrowserRouter>
                <Link to="/KILO/kreiranjeZadace/?idPredmeta=3">
                    Kreiranje    
                </Link>
                <Route path='/KILO/kreiranjeZadace/' exact component={KreiranjeZadace}/>
            </BrowserRouter>
        </div>)
    }
}

export default AzuriranjeZadace