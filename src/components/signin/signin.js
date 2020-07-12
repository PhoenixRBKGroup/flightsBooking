import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
const axios = require('axios');

class Signin extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      pass:""
    }
  }
  handleChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit(e){
  e.preventDefault();
  axios.get('/signin',{email:this.state.email,pass:this.state.pass}).then((result)=>{
    console.log(result)
  }).catch((err)=>{
    console.log("err signing in!"+err);
  })
  alert('you have been sucessfully signed up!');
}
  render(){
  return (
  <div>
    <form >
        <label htmlFor="email" >Email:</label>
        <input type="email" name="email" value={this.state.email} id="email" onChange={this.handleChange.bind(this)}/><br></br>
        <label htmlFor="pass" >Password: </label>
        <input type="password" name="pass" value={this.state.pass} id="pass" onChange={this.handleChange.bind(this)}/><br></br>
        <button onSubmit={this.handleSubmit.bind(this)}>Sign In</button>
    </form>
    </div>
  )
  }
}

export default Signin;

// app.get('/signin',(req,res)=>{
//   const {email,pass} = req.body;
//   userModel.find({email:email,pass:pass}).then((result)=>{
//   res.status(202).send(result+"sucess");
//   }).catch((err)=>{
//    res.status(404).send(err);
//   })
// })
