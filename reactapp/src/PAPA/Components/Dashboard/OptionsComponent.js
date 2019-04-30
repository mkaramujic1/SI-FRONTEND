import React, { Component } from 'react';
import './CommonCss.css';

export class Options extends Component {
	constructor() {
        super();
        this.state = {
          povratak:false
        };
        this.handleSubmit=this.handleSubmit.bind(this);
      }
    povratak=false;
    handleSubmit(){// = evt => {
        //this.setState({povratak:true});
        console.log("Uslo je u funnnn");
        var x=document.getElementsByClassName("osoblje");
    	if(x[0].style.display=="none"){
    		x[0].style.display="inline";
    	}
    	else{
    		x[0].style.display="none";
    	}
      }
    render() {
      return(
        <div style={{ margin: '0px 0', padding: '15px'}}>
            <div class="card border-secondary mb-3">
                <div class="card-header">Više informacija:</div>
                <div class="card-body">
                <div class="list-group">
                <div class="informacije-osoblja">
                    		<button onClick={this.handleSubmit} class="list-group-item list-group-item-action">Osoblje na predmetima</button>
                    		<div class="osoblje" style={{display: 'none'}}>
                    			<p>Zlatan Tucaković</p>
                    			<p>Vedran Karihodžić</p>
                    			<p>Marina Miličević</p>
                    			<p>Mehmed Brkić</p>
                    			<p>Emir Cogo</p>
                 			</div>
             			</div>
                    <a href="#" class="list-group-item list-group-item-action">Podnošenje zahtjeva</a>
                </div>
                </div>
            </div>
        </div>
        );
    }
}


/**<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */