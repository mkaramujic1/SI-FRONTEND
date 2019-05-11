import React, { Component } from "react";
import "../bootstrap.css";
import { Icon } from "@opuscapita/react-icons";

class ZadatakVecPoslan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brojZadace: 4,
      brojZadatka: 3,
      listaTipova: [".pdf", ".rar", ".doc"],
      datumSlanja: "25.05.19",
      vrijemeSlanja: "23:23",
      nazivFajla: "Zadatak1",
      velicinaFajla: "1MB",
      komentar:
        "zadaca je ok zadaca je ok zadaca je ok zadaca je ok zadaca je ok"
    };
  }

  handleClick = event => {
    var ime = event.target.name; //name uzmem
    if (ime === undefined) ime = "arrowLeft"; //ne znam sto nece da iscita name ikone
    switch (ime) {
      //ako je rok prosao, blokirati upload

      case "posaljiZadatak": {
        //poslati backendu fajl
        var nazivUploada = document.getElementById("uploadButton").value;
        console.log(nazivUploada);
        break;
      }
      case "ponisti": {
        document.getElementById("uploadButton").value = "";
        break;
      }

      case "arrowLeft": {
        //ide na Edininu tabelu, back dugme
        console.log("back Dugme aktivirano");
        break;
      }
      case "preuzmi": {
        //salji na rutu u backendu
        console.log("preuzmi button acitvated");
        break;
      }

      case "pregled": {
        //salji na rutu u backendu
        console.log("pregled button acitvated");
        break;
      }
      default:{

      }
    }
  };

  render() {
    var listOfTypes = this.state.listaTipova;

    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Zadaća {this.state.brojZadace}. </b>
            <Icon
              type="indicator"
              name="arrowLeft"
              className="mr-2 bg-light float-right"
              onClick={this.handleClick}
            />
          </h4>
          <h5>Zadatak broj {this.state.brojZadatka}</h5>
        </div>
        <br />
        <div className="card border-primary bg-primary text-light mb-3">
          <div className="card-header">
            <b>Podaci o poslanom zadatku</b>
          </div>
        </div>
        <div className="form-group">
          <div className="row mr-3">
            <div className="col">
              <fieldset>
                <label className="control-label ml-3">
                  Datum slanja zadatka:
                </label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.state.datumSlanja}
                  readOnly=""
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset>
                <label className="control-label ml-3">
                  Vrijeme slanja zadatka:
                </label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.state.vrijemeSlanja}
                  readOnly=""
                />
              </fieldset>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mr-3">
            <div className="col">
              <fieldset>
                <label className="control-label ml-3">Naziv datoteke:</label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.state.nazivFajla}
                  readOnly=""
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset>
                <label className="control-label ml-3 mr-3">
                  Veličina datoteke:
                </label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.state.velicinaFajla}
                  readOnly=""
                />
              </fieldset>{" "}
            </div>
          </div>
        </div>
        <label className="control-label ml-3">Komentar:</label>
        <div className="card border-secondary ml-3 mr-3">
          <div className="card-body">
            <p className="card-text">{this.state.komentar}</p>
          </div>
        </div>
        <br />
        <button
          name="preuzmi"
          type="button"
          className="btn btn-primary ml-3"
          onClick={this.handleClick}
        >
          <Icon type="indicator" name="sortDesc" className="mr-2" />
          Preuzmi datoteku
        </button>
        <button
          name="pregled"
          type="button"
          className="btn btn-primary ml-5"
          onClick={this.handleClick}
        >
          <Icon type="indicator" name="search" className="mr-2" />
          Pregled datoteke
        </button>
        <hr />
        <br />
        <div className="card border-primary bg-primary text-light mb-3">
          <div className="card-header">
            <b>Ponovno učitavanje datoteke</b>
          </div>
        </div>
        <div className="form-group">
          <label className="ml-3">Lista dozvoljenih tipova: </label>
          <select
            multiple=""
            className="custom-form-control ml-4 btn btn-outline-primary"
          >
            {listOfTypes.map(clan => (
              <option key={clan}>{clan}</option>
            ))}
          </select>
        </div>
        <input
          id="uploadButton"
          type="file"
          className="btn-outline-secondary ml-3"
        />
        <button
          name="ponisti"
          type="button"
          className="btn btn-danger ml-5 text-body"
          onClick={this.handleClick}
        >
          <Icon type="indicator" name="remove" className="mr-2" />
          Poništi
        </button>
        <button
          name="posaljiZadatak"
          type="button"
          className="btn btn-primary ml-2"
          onClick={this.handleClick}
        >
          Pošalji zadatak
        </button>
        <hr />
      </div>
    );
  }
}

export default ZadatakVecPoslan;