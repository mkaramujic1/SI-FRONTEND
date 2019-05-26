

import React, { Component } from 'react';
class Zadace extends Component {  
    state = {postotakBodovaZadace:33, postotakBodovaIspiti:70}


    render () {
        const stringicZadace = this.state.postotakBodovaZadace+"%";

        return(
            <div className="row">
            <div className="col-3">
                <b >Zadaće i projekti</b>
            </div>
            <div className="col-6">
                <div class="progress"  style={{width:250, height:25,  margin:5}} >
                  <div class="progress-bar" role="progressbar" style={{width: stringicZadace}}  aria-valuenow={this.state.postotakBodovaZadace} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodovaZadace}%</div>
                </div>
            </div>
              <div className="col-3">
              <a class="btn btn-primary btn-block" href="/Kilo/student" role="button">Zadaće</a>
            </div>
           </div>
        );
    }
}

export default Zadace;


