import React, { Component } from 'react'

class InformacijeOIspituForma extends Component {

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="rokPrijave">Rok prijave: </label> <br />
            <input type="date" className="form-control" id="datetimep" />
            <label htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> <br/>
            <input type="text"/>
          </div>
        </form>
      </div>)
  }
}

export default InformacijeOIspituForma