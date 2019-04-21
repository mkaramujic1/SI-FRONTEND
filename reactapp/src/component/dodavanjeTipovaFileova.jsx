import React, { Component } from "react";
import { CustomInput, Form, FormGroup, Label, Input, Table } from "reactstrap";
import "../bootstrap.css";

const FILE_TYPES = [
  {
    ekstenzija: ".pdf",
    nazivEkstenzije: "pdf"
  },
  {
    ekstenzija: ".zip",
    nazivEkstenzije: "zip"
  },
  {
    ekstenzija: ".m",
    nazivEkstenzije: "m"
  },
  {
    ekstenzija: ".doc",
    nazivEkstenzije: "doc"
  },
  {
    ekstenzija: ".txt",
    nazivEkstenzije: "txt"
  }
];

class DodavanjeTipovaFileova extends Component {
  render() {
    var kk = this.props.podaci.state.naziv;
    var kolone = [];
    for (var i = 1; i <= this.props.podaci.state.brojZadataka; i++) {
      kolone.push("Zadatak " + i);
    }

    return (
      <div>
        <Form>
          <div className="card-header bg-primary text-light  mb-4">
            <h4>
              <b>Tipovi fileova za svaki zadatak</b>
            </h4>
          </div>
          <FormGroup tag="fieldset">
            <legend>Da li svi zadaci imaju iste tipove fileova:</legend>

            <CustomInput
              checked={this.props.podaci.state.sviTipoviIsti}
              type="switch"
              id="switchTip"
              name="sviTipoviIsti"
              label="DA"
              onChange={this.props.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Table className="table table-bordered text-center bg-active border-solid">
              <thead>
                <tr className="bg-primary text-light">
                  <th>Naziv zadaće</th>

                  {kolone.map(jedno => (
                    <th scope="col" key={jedno}>
                      {jedno}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{kk}</th>
                  {kolone.map((jedno, index) => (
                    <th scope="col">
                      <td>
                        {FILE_TYPES.map((item, jIndex) => (
                          <FormGroup key={item.ekstenzija} check>
                            <Input
                              type="checkbox"
                              id={jedno + item.nazivEkstenzije}
                              disabled={
                                this.props.podaci.state.sviTipoviIsti &&
                                index > 0
                              }
                              checked={
                                this.props.podaci.state.listaTipova[index][
                                  jIndex
                                ]
                              }
                              onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija =
                                  item.nazivEkstenzije;
                                this.props.podaci.onChangeListaTipova(
                                  index,
                                  jIndex
                                );
                              }}
                            />{" "}
                            <Label check>{item.ekstenzija}</Label>
                          </FormGroup>
                        ))}
                      </td>
                    </th>
                  ))}
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default DodavanjeTipovaFileova;
