import React, { Component } from 'react';
import SviPredmeti from './SviPredmeti';
import PropTypes from 'prop-types';
import LiteraturaProfesor from './literaturaProfesor';
import LiteraturaStudent from './literaturaStudent';
import DodavanjeDatuma from './DodavanjeDatuma';
import ObjavaStudent from './objavaStudent';
class mojiPredmeti extends Component {
  render() {
    this.state={
      svipredmeti: [
        {
          id: 1,
          naziv: 'SI',
          opis:' opis premeta '
        },
        {
          id: 2,
          naziv: 'VI',
          opis: 'opis predmeta'
        }
      ],
      datumobjave:{
          id:1,
          datum:Date.now()
        }
      

    }
    console.log(this.state)
    return (
      
        <div>
            <h1>Moji predmeti</h1>
            <SviPredmeti predmeti={this.state.svipredmeti} />
            <LiteraturaStudent></LiteraturaStudent>
            <DodavanjeDatuma datumobjave={this.state.datumobjave}/>
            <ObjavaStudent naslov="Predavanje 1"></ObjavaStudent>
        </div>
        

    );
  }
}
SviPredmeti.propTypes={
  svipredmeti: PropTypes.array.isRequired
}
export default mojiPredmeti;