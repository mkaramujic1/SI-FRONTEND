import React, {Component} from 'react'
import axios from 'axios'

class prikazAsistenta extends Component{
    constructor(props) {
        super(props)

       // this.call=this.call.bind(this);
        this.state = {
          lista: [], 
          search: ''
        }
    }

   

    componentDidMount(param){
      var xhttp = new XMLHttpRequest();
      var self = this;
      
      xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            self.setState({
            lista: JSON.parse(this.response)
          });
        }
      }
      //SA : "http://localhost:31901/api/korisnik/searchAssistant?ime="+param
      //BEZ: "http://localhost:31901/api/korisnik/getAllAssistants"
     if(param!='') xhttp.open("get", "https://jsonplaceholder.typicode.com/posts?userId="+param, true);
     else xhttp.open("get", "https://jsonplaceholder.typicode.com/posts", true);
      xhttp.send();
    }

    handleChange = (e) =>{
      this.setState({
        search:e.target.value
      }) 
    }

    render (){
        const {lista, search}=this.state
        return (
            <div>
               <br /> 
              <input type="text" className="form-control col-md-2" value={search} onChange={this.handleChange}></input> <br />
              <button className="btn btn-success btn-block col-md-2" onClick={()=> this.componentDidMount(search)}>Search</button>
            <br />
              
                
              <table> 
                <thead className="table table-sm table-primary">
                  <tr>
                      <th >ID</th>
                      <th >IME</th>
                      <th >PREZIME</th>
                      <th >IME RODITELJA</th>
                      <th >SPOL</th>
                      <th >JMBG</th>
                      <th >DATUM ROĐENJA</th>
                      <th >MJESTO ROĐENJA</th>
                      <th >KANTON</th>
                      <th >DRŽAVLJANSTVO</th>
                      <th >EMAIL</th>
                      <th >TELEFON</th>
                      <th >USERNAME</th>
                      <th >TITULA</th>
                      <th >WEBSITE</th>
                  </tr>
                </thead>
                <tbody className="table table-sm table-light">
                {
                    //paziti sta se prikazuje, nece biti list.title!!!
                    //ako je length!=0 prikazati listu, u suprotnom vratiti null
                    //PARAMETRI: id, ime, prezime, datumRodjenja, JMBG, email, mjestoRodjenja, kanton, drzavljanstvo, telefon, spol, imePrezimeMajke, imePrezimeOca, adresa, username, linkedin, titula, website
                
                    lista.length ? lista.map(list => 
                        <tr key={list.id}>
                            <th><input className="form-control" type="text"  readOnly value={list.id}></input></th>
                            <th><input className="form-control" type="text" value={list.body} onChange={this.handleChange}></input></th>
                            <th>
                             { /*<input className="form-control" type="text" value={list.title} onChange={this.handleChange}></input><br/>*/}
                              {list.title}<br/>
                              {list.id}
                            </th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
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
