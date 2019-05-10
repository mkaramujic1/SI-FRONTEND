import React, {Component} from 'react'
import axios from 'axios'


class prikazOdsjeka extends Component{
    constructor(props) {
        super(props)

        this.state = {
          lista: [], 
          selectedValue: ''
        }
    }

    componentDidMount(){

        //Promijeniti URL
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});
        })
        . catch (error =>{
            console.log(error)
        })
    }

    onChange = (e) => {
        this.setState({selectedValue: e.target.value})
    }

    render (){
        const {lista, selectedValue}=this.state
        return (
            <div className="col-md-2">
            <br />
                <p>Prikaz svih odsjeka: </p><br />
                <select className="custom-select" value={selectedValue} onChange={this.onChange}> 
                {
                    //paziti sta se prikazuje, nece biti list.title!!!
                    //ako je length!=0 prikazati listu, u suprotnom vratiti null
                    lista.length ? lista.map(list => <option key={list.id}>{list.title}</option>): null
                }
                </select><br /><br />
                
                <input type="submit" value="Edit" className="btn btn-success btn-block" />
            </div>
        );
    }
}

export default prikazOdsjeka
