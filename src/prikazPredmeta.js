import React, {Component} from 'react'
import axios from 'axios'

class prikazAsistenta extends Component{
    constructor(props) {
        super(props)

        this.state = {
          lista: [], 
          search: ''
        }
    }

   

    componentDidMount(param){
      console.log(param);
      var xhttp = new XMLHttpRequest();
      var self = this;
      
     xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            self.setState({
            lista: JSON.parse(this.response)
          });
        }
      }
    
     if(param!='') xhttp.open("get", "http://localhost:31901/api/predmet/GetPredmet?naziv="+param, true);
     else xhttp.open("get", "http://localhost:31901/api/predmet/GetPredmeti", true);
     
      xhttp.send();
    }

    handleChange = (e) =>{
      this.setState({
        search:e.target.value
      }) 
    }

    obrisi(naziv){
        console.log(naziv);
        axios.delete("http://localhost:31901/api/predmet/deleteSubject?naziv="+naziv)
        .then(response => {
            console.log(response);    
        })
        . catch (error =>{
            console.log("Error", error)
        })
    }

    render (){
        const {lista, search}=this.state
        console.log("LISTA", lista);
        return (
            <div>
              <br /> 
                <input type="text" className="form-control col-md-2" value={search} onChange={this.handleChange}></input>  <br />
                <button className="btn btn-success btn-block col-md-2" onClick={()=> this.componentDidMount(search)}>Search</button>
              <br />
              
              <table>  
                <thead className="table table-sm table-primary">
                  <tr>
                      <th >ID</th>
                      <th >NAZIV</th>
                      <th >ECTS</th>
                      <th >BROJ PREDAVANJA</th>
                      <th >BROJ VJEŽBI</th>
                      <th >OPIS</th>
                      <th >ID PROFESORA</th>
                      <th >ID ASISTENTA</th>
                      <th>OBRIŠI</th>
                  </tr>
                </thead>
                <tbody className="table table-sm table-light">
                {
                    lista.length ? lista.map(list => 
                        <tr key={list.id}>
                            <th>{list.id}</th>
                            <th>{list.naziv}</th>
                            <th>{list.ects}</th>
                            <th>{list.brojPredavanja}</th>
                            <th>{list.brojVjezbi}</th>
                            <th>{list.opis}</th>
                            <th>{list.idProfesor}</th>
                            <th>{list.idAsistent}</th>
                            <th><button className="btn btn-success btn-block"  onClick={()=>this.obrisi(list.naziv)}>Delete</button></th>
                        </tr>)
                    : null
                }
                </tbody>
              </table><br /><br />
              
            </div>
        );
    }
}

export default prikazAsistenta
