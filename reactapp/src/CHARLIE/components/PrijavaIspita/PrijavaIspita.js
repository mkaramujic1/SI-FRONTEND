import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import IspitCard from "../SharedComponents/IspitCard";

class PrijavaIspita extends React.Component {
  state = { ispiti: [] };

  async componentDidMount() {
    //kad se uradi backend otkomentarisati..
    //const ispiti = await axios.get("http://localhost:31903/ispiti");
    //Filter po predmetima koje slusa student
    //Za svaki entry nadji ime predmeta na osnovu id-a
    //this.setState({ ispiti: ispiti.data });
  }

  render() {
    return (
      <div className="container">
        <h1>Prijava ispita</h1>
        <div id="vrsteIspita">
        <IspitCard ispiti={this.state.ispiti} tipIspita="II parcijalni ispit"/>
        <IspitCard ispiti={this.state.ispiti} tipIspita="Usmeni ispit" id="usmeniIspiti" />
        </div>
      </div>
    );
  }
}

export default PrijavaIspita;
