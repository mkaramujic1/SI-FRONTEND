import React, { Suspense, Fragment, memo , Component} from "react";
import uuid from 'uuid';
import axios from 'axios';
import './grupeStudent.css';
import { Combobox } from 'react-widgets'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Tabela from './tabela.js';
import { link } from "fs";

class Grupe extends Component {

state={
    isLoaded:false,
    grupe:[],
    predmet:undefined,
    trenutniRedoslijed:undefined    
};

componentDidMount = () =>{
  fetch("http://localhost:31920/getRedoslijed")
      .then(resRedoslijed => resRedoslijed.json())
      .then(jsonRedoslijed => {
        var linkGrupe;
        if(jsonRedoslijed.naziv=="Redoslijed abecede")
          linkGrupe="http://localhost:31920/getGrupeAbeceda/4";
        else
          linkGrupe="http://localhost:31920/getGrupePrijavljivanje/4";
    fetch(linkGrupe)
        .then(resGrupe => resGrupe.json())
        .then(jsonGrupe => {
          fetch("http://localhost:31920/getPredmet/4")
            .then(resPredmet => resPredmet.json())
            .then(jsonPredmet => {

                this.setState({
                isLoaded:true,
                grupe:jsonGrupe,
                predmet:jsonPredmet,
                trenutniRedoslijed:jsonRedoslijed
              })
            });
          });
        }); 
  }

render = () =>{ 
    

    for(var i=0;i<spisakGrupe.length;i++)
    {
        if(spisakGrupe[i].kapacitet>maxKapacitet)
        maxKapacitet=spisakGrupe[i].kapacitet;

        
        var headTitle="Grupa G"+(i+1)
        + " - " + dani[parseInt(spisakGrupe[i].danUSedmici)-1].title 
        + " "   + spisakGrupe[i].vrijeme 
        + " "   + spisakGrupe[i].kabinet;

        var login=1;        
       if(indexGrupeLogovanogStudenta==i)
       login=1;
       else if (indexGrupeLogovanogStudenta==-1)
       login=3;
       else
       login=2;

        rendering.push(
            <Tabela trenutniRedoslijed={this.state.trenutniRedoslijed} lockState={lockState} redniBroj = {i} kapacitet={maxKapacitet} naziv={headTitle} grupa={spisakGrupe[i]} login={login} idLogovanogStudenta={idStudent} />
        );        
    }

    return (
        <div>
           <div style={naslovStyle}>
            <h1>{dataPredmet.naziv}</h1>             
           </div>
           {podnaslov}
           
           <div style={divStyle}>
             {rendering}               
           </div>
        </div>
    );   
  }
}

export default React.memo(Grupe);

const divStyle=
{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}


const naslovStyle=
{
    textAlign: 'center'
}

const podnaslovStyle=
{
    textAlign: 'center',
    color:'gray'
}

const dani =[
    {
      title:'Ponedjeljak'
    },
    {
      title:'Utorak'
    },
    {
      title:'Srijeda'
    },
    {
      title:'Četvrtak'
    },
    {
      title:'Petak'
    },
    {
      title:'Subota'
    },
    {
      title:'Nedjelja'
    }
  ];

