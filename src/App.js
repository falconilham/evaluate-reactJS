import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './login';
import Loginotp from './loginotp';
import Product from './product';

class App extends Component {
  constructor()
{
  super();
  this.state={
    field:{
    nama : "" ,
    password : "",
    otp: ""
    },
  token: ''
  }
}

  handleSubmit = (e) =>
  {
    e.preventDefault()
    const payload = {
      email : this.state.field.nama,
      password : this.state.field.password
    } 
    const self = this
    axios.post('https://apifront-dev.bitubi.id/api/b2b-v1/login', payload)
    .then(function (response) {
    console.log(response.data.token);
    self.setState({
      token: response.data.token
    })
  })
  .catch(function (error) {
    console.log(error.response);
  });
}
  
  handleSubmitotp = (e) => {
    e.preventDefault()
    const payload = {
      email : this.state.field.nama,
      password : this.state.field.password,
      token : this.state.token,
      otp_code : this.state.field.otp,

    } 
    const self = this
    axios.post('https://apifront-dev.bitubi.id/api/b2b-v1/login-otp', payload)
    .then(function (response) {
    sessionStorage.setItem("token", response.data.data.accessToken)
    console.log(response.data);
    //self.setState({
     // token: response.data.token
    //})
  })
  .catch(function (error) {
    console.log(error.response);
  });
  }

  handleChange = (e) =>
  {
    let field = this.state.field
    field[e.target.name] = e.target.value
    this.setState({
      field
    })

  }

  render() {
      return(
          <div className="container">
            {this.state.token === "" ? (
            <Login 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}
           />
          ):(
          <Loginotp 
            handleSubmitotp={this.handleSubmitotp} 
            handleChange={this.handleChange}
          />
          )}
        </div>

      )
  }
}

export default App;
