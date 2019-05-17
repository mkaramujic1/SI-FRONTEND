import React, { Component } from "react";
import axios from "axios";

class UgovorOUcenju extends Component {
  state = {
    izabranaGodina: 1,
    izabraniSmjer: 1,
    izabraniSemestar: 1,
    listaIzbornih: [],
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  promjenaGodineStudija(event) {
    this.setState({ izabranaGodina: event.target.value }, function() {
      console.log(this.state.izabranaGodina);
      this.prikaziIzborne();
    });
  }

  promjenaSmjera(event) {
    this.setState({ izabraniSmjer: event.target.value }, function() {
      console.log(this.state.izabraniSmjer);
      this.prikaziIzborne();
    });
  }

  promjenaSemestra(event) {
    this.setState({ izabraniSemestar: event.target.value }, function() {
      console.log(this.state.izabraniSemestar);
      this.prikaziIzborne();
    });
  }

  prikaziIzborne() {
    try {
      axios
        .get(
          `http://localhost:31918/predmeti/` +
            this.state.izabraniSmjer +
            `/` +
            this.state.izabranaGodina +
            `/` +
            this.state.izabraniSemestar
        )
        .then(res => {
          const predmeti = res.data.dostupniPredmeti.map(obj => obj.naziv);
          const obavezan = res.data.dostupniPredmeti.map(obj => obj.obavezan);
          const izborni = [];
          for (var i = 0; i < obavezan.length; i++) {
            if (obavezan[i] == "0") {
              izborni.push(predmeti[i]);
            }
          }
          this.setState({ listaIzbornih: izborni });
          console.log(this.state.listaIzbornih);
        });
    } catch (e) {}
  }

  componentDidMount() {
    this.prikaziIzborne();
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col" />
          <div className="col" style={{ textAlign: "center" }}>
            <div className="card" style={{ display: "inline-block" }}>
              <div className="card-body">
                <h3 className="card-title">Ugovor o učenju</h3>
                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>

                <select
                  className="custom-select"
                  onChange={e => this.promjenaGodineStudija(e)}
                >
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                  <option value="3">3.</option>
                  <option value="4">4.</option>
                  <option value="5">5.</option>
                  <option value="6">6.</option>
                  <option value="7">7.</option>
                  <option value="8">8.</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Smjer
                  </label>
                </div>
                <select
                  className="custom-select"
                  onChange={e => this.promjenaSmjera(e)}
                >
                  <option value="1">RI</option>
                  <option value="2">AIE</option>
                  <option value="3">EE</option>
                  <option value="4">TK</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Semestar
                  </label>
                </div>
                <select
                  className="custom-select"
                  onChange={e => this.promjenaSemestra(e)}
                >
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Izborni predmeti
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label">Izborni predmeti</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default UgovorOUcenju;
