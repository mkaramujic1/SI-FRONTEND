import React, {Component} from 'react'
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

class FormaPrikazStud extends Component{
    constructor(props){
        super(props)
        
        this.initialState={
            index: ''
        }
        this.state = this.inistalState;
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    handleOptionChange = changeEvent => {
        this.setState({
          spol: changeEvent.target.value
        });
    }

    render(){

        const{index} = this.state;

        return(
            <form  onSubmit={this.handleSubmit} className="container-fluid">
                
                <br />
                <label>Unesite broj indexa za pretraživanje studenta:(ako ostavite ovo prazno, ispisat ce se svi studenti)</label>    
              
                <div className='row'>
                    <br>
                    </br>
                    
                    <div className ='col-md-1'>
                        <input className="form-control " type="number" name="index" value={index} onChange={this.handleChange} />     
                    </div> 
                    
                    <div className='col-md-1'>
                        <input type="submit" value="Submit" className="btn btn-success btn-block" /> <br /><br /> 
                    </div>
                </div>

               
                <label > Tabelaran prikaz studenata:</label> <br />
                

            </form>  
        );
    }
}


export default FormaPrikazStud