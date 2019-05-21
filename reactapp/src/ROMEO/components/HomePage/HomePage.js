import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './homePage.css';

class Login extends Component {
  constructor(props) {
      super(props)
      const token = localStorage.getItem("token")

      let logiran = true
      if(token == null) {
          logiran = false
      }

      this.state = {
          logiran
      }
  }

  componentWillMount() {
    document.title = 'Home Page'
  }

  Odjavi = (e) => {
    localStorage.removeItem("token")
    this.props.history.push("/romeo/login");
  }
	
  render () {
    if (this.state.logiran === false) {
      return <Redirect to="/romeo/login" />
    }
    return (
      <div className="App">
        <div className="header">
      
        </div>
        <div className="main">
          <h1>Dobro dosli na home page</h1>
        </div>
        <div className="menu">
          <input type="button" name="odjava" id="odjava" value="Odjavi se" onClick={this.Odjavi} />
        </div>
        <div className="footer">
          Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
