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
        if(search==''){
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
            axios.get ('http://localhost:31901/api/odsjek/GetOdsjek?naziv='+search)
            .then(response => {
                console.log("Lista: ", response.data);
                this.setState({lista: [response.data]});
            })
            . catch (error =>{
                console.log(error)
            })
        }
    }

    handleChange = (e) =>{
        this.setState({
          search: e.target.value
        }) 
    }

    obrisi(naziv){
        console.log(naziv);
        axios.delete("http://localhost:31901/api/odsjek/DeleteOdsjek?naziv="+naziv)
        .then(response => {
            console.log(response);    
        })
        . catch (error =>{
            console.log("Error", error)
        })
    }

    render (){
        const {lista, search}=this.state
        console.log("l",lista);
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
                            <th>OBRIŠI</th>
                        </tr>
                    </thead>
                    <tbody className="table table-sm table-light">
                        {
                            lista.length ? lista.map(list => 
                                <tr key={list.idOdsjek}>
                                    <th>{list.idOdsjek}</th>
                                    <th>{list.naziv}</th>
                                    <th><button className="btn btn-success btn-block"  onClick={()=>this.obrisi(list.naziv)}>Delete</button></th>
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
