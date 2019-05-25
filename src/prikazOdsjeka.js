import React, {Component} from 'react'
import axios from 'axios'


class prikazOdsjeka extends Component{
    constructor(props) {
        super(props)

        this.state = {
          lista: [], 
          search: ''
        }
    }

    componentDidMount(search){
        var xhttp = new XMLHttpRequest();
        var self = this;
        
       xhttp.onreadystatechange = function(){
          if (xhttp.readyState == 4 && xhttp.status == 200){
              self.setState({
              lista: JSON.parse(this.response)
            });
          }
        }
      
       if(param!='') xhttp.open("get", 'http://localhost:31901/api/odsjek/GetOdsjek?id='+search, true);
       else xhttp.open("get", "http://localhost:31901/api/odsjek/GetOdsjeci", true);
       
        xhttp.send();
       /* if(search==''){
            //Promijeniti URL
            //http://localhost:31901/api/odsjek/GetOdsjeci
            axios.get ('http://localhost:31901/api/odsjek/GetOdsjeci')
            .then(response => {
                console.log("Lista: ", response.data);
                this.setState({lista: response.data});
            })
            . catch (error =>{
                console.log(error)
            })
        }
        else{
            axios.get ('http://localhost:31901/api/odsjek/GetOdsjek?id='+search)
            .then(response => {
                console.log("Lista: ", response.data);
                this.setState({lista: response.data});
            })
            . catch (error =>{
                console.log(error)
                alert("NEMA");
            })
        }*/
    }

    handleChange = (e) =>{
        this.setState({
          search:e.target.value
        }) 
    }

    render (){
        const {lista, search}=this.state
        console.log("l ",lista.length);
        return (
            <div className="col-md-7">
                <br /> 
                    <input type="text" className="form-control col-md-2" value={search} onChange={this.handleChange}></input>  <br />
                    <button className="btn btn-success btn-block col-md-2" onClick={()=> this.componentDidMount(search)}>Search</button>
                <br />
                

                <table >
                    <thead className="table table-sm table-primary">
                        <tr>
                            <th>ID</th>
                            <th>NAZIV</th>
                        </tr>
                    </thead>
                    <tbody className="table table-sm table-light">
                        {
                            lista.length ? lista.map(list => 
                                <tr key={list.idOdsjek}>
                                    <th>{list.idOdsjek}</th>
                                    <th>{list.naziv}</th>
                                </tr>
                            ): null
                        }
                    </tbody>
                </table><br /><br />
                
            </div>
        );
    }
}

export default prikazOdsjeka
