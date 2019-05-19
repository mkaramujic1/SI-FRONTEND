import React, { Component } from 'react';
import url from '../url'
import './style.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import SingleChoice from './SingleChoice'
import MultipleChoice from './MultipleChoice'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anketaZaPredmet: true,
      vrstaAnkete: 'javna anketa',
      nazivAnkete: '',
      opisAnkete: '',
      datumIstekaAnkete: new Date(),
      pitanja: [{}]
    }
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.kreirajAnketu = this.kreirajAnketu.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.dodajPitanje = this.dodajPitanje.bind(this);
  }

  azurirajPitanje = (state, i) => {
    this.setState((st) => {
      st.pitanja[i] = state
      return st
    })
  }

  handleRadioChange(event) {
      this.setState({vrstaAnkete: event.target.value}) 
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDateChange(date) {
    this.setState({
      datumIstekaAnkete: date,
      aa: this.state.datumIstekaAnkete.toISOString().slice(0, 19).replace('T', ' ')
    });
  }

  dodajPitanje() {
    this.setState({
      pitanja: this.state.pitanja.concat([1])
    })
  }

  render() {
    return ( 
      <div style={{padding: '25px', backgroundColor: 'white'}}>
        
        <div className="row justify-content-center">
          <div className="">
            <h1>Kreiranje ankete</h1>
          </div>
        </div>
        <hr/>
        <div>
          <form>
            <h5>Naziv ankete:</h5>
            <div className="row">
              <div className="col-4">
                <input type="text" className="form-control inputText" name="nazivAnkete" onChange={this.handleInputChange}/>
              </div>
            </div>
            <h5>Opis ankete:</h5>
            <div className="row">
              <div className="col-4">
                <input type="text" className="form-control inputText" name="opisAnkete" onChange={this.handleInputChange}/>
              </div>
            </div>
            <h5>Datum isteka ankete:</h5>
            <div className="row">
              <div className="col-12">
                <DatePicker
                            onChange={this.handleDateChange} 
                            selected={this.state.datumIstekaAnkete} 
                            showTimeSelect
                            dateFormat="yyyy-MM-dd HH:mm:ss"
                            timeCaption="time"
                            />
              </div>
            </div>
            <h5>Odaberite vrstu ankete:</h5>
            <div className="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="vrstaAnketeRadio" value="javna anketa" className="custom-control-input" onChange={this.handleRadioChange} defaultChecked/>
              <label className="custom-control-label" for="customRadio1">Javna anketa</label>
            </div>
            <div className="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="vrstaAnketeRadio" value="anketa za predmet" className="custom-control-input" onChange={this.handleRadioChange}/>
              <label className="custom-control-label" for="customRadio2">Anketa za predmet</label>
            </div>
            <div className="custom-control custom-radio">
              <input type="radio" id="customRadio3" name="vrstaAnketeRadio" value="anketa za sve predmete"className="custom-control-input" onChange={this.handleRadioChange}/>
              <label className="custom-control-label" for="customRadio3">Anketa za sve predmete</label>
            </div>
            
            <hr/>
            { this.state.vrstaAnkete != 'anketa za predmet' || (
              <div>
                <div className="form-group row">
                  <div className="col-3">
                    <br/>
                    <label for="exampleSelect1">Predmet</label>
                    <select className="form-control" id="exampleSelect1">
                      <option>ARM</option>
                      <option>SI</option>
                      <option>OOI</option>
                      <option>DM</option>
                      <option>Algoritmi i Strukture Podataka</option>
                    </select>
                  </div>
                </div>
                <hr/>
              </div>
              ) 
            }
            {JSON.stringify(this.state)}
            <h5>Pitanja:</h5>
            {this.state.pitanja.map((pitanje, i) => {
               return (
               <MultipleChoice azurirajPitanje={(state) => this.azurirajPitanje(state, i)}/>
               )
            })}
            <div className="row justify-content-center">
              <button className="btn btn-secondary" onClick={this.dodajPitanje} type="button">
                Dodaj pitanje
              </button>
            </div>
            
            <hr/>
            <div className="row justify-content-center">
              <button className="btn btn-primary" onClick={this.kreirajAnketu}>
                Kreiraj anketu
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

   kreirajAnketu() {
      fetch(url + '/createAnketa', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          idNapravio: 1,
          idPredmet: 4,
          tipAnkete: this.state.vrstaAnkete,
          naziv: this.state.nazivAnkete,
          opisAnkete: this.state.opisAnkete,
          datumIstekaAnkete: this.state.datumIstekaAnkete.toISOString().slice(0, 19).replace('T', ' '),
          pitanja: this.state.pitanja
        })
      }).then((res, err) => {
        this.setState({
          error: err
        })
      })
   }
}



export default App;
