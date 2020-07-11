import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios')
const checkEmail =()=>{
  const isExist = true;
  axios
  .get(`http://localhost:3000/page/${this.state.email}`)
  .then((result)=>{
    console.log("the Email is available ")
  })
  .catch((err)=>{
    console.log("ERROR the email is used " ,err)
    isExist = false;
  })
  return isExist
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      userName :"",
      email :"",
      password:""

    }
}
handleChange = (e)=>{
  this.setState({ [e.target.id] : e.target.value })
}
handleSubmit = (e)=>{
  e.preventDefault()
  if(!checkEmail()){
     axios.post("http://localhost:3000/page",{
         userName : this.state.userName,
         email : this.state.email,
         password : this.state.password
        }) .then((result)=>{
          console.log("result   ",result)
        
        })
        .catch((err)=>{
          console.log("ERROR FROM AXIOS " ,err)
        }) 
  }else {
     alert('The email is aready used')
  }
}


  render(){
    const {userName,password,email}=this.state;
    const values = {userName,password,email};
    return(
      <div className ="signIn">
        <form>
          <h1> sign up </h1>
          <label className = "label"> user name</label>
          <input type = 'text' placeholder ="Enter the user name " 
          defaultValue = {values.userName} id = 'userName' className ="input1"
          onChange ={this.handleChange} >
          </input>
          <br></br>    
          <br></br>
          <label className = "label"> Email</label>
          <input type = 'text' placeholder ="Enter your email " 
          defaultValue = {values.email} id = 'email' className ="input1"
          onChange ={this.handleChange} >
          </input>
          <br></br>
          <br></br>
          <label className = "label"> password</label>
          <input type = 'password' placeholder ="Enter the password " 
          defaultValue = {values.password} id = 'password' className ="input1"
          onChange ={this.handleChange}
           >
          </input>
          <button  onClick={this.handleSubmit} >sign up</button>

       </form>
      </div>
   
    )
  }
}

export default App;
