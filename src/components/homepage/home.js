
import React, { Component } from 'react';
import Return from './forms/return';
import OneWay from './forms/oneway';
import MultiCity from './forms/multicity'
const axios = require('axios');


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
    //    return:"",
    //    oneway:"",
    //    multicity:""
      choice:""
    }
  }

handleSubmit(e){
  e.preventDefault();

}

handleOptionChange(e) {
    this.setState({
      [e.target.id]: e.target.id
    });
    console.log(this.state.choice)
  }

handleForms(){
  if(this.state.choice == 'return'){
     return <Return/>

  }else if(this.state.choice === 'oneway'){
      return <OneWay/>
  }else if(this.state.choice === 'multicity'){
      return <MultiCity/> 
  }
}
  // checked={this.handleForms.bind(this)}

  render(){
  return (
  <div>
    <form >
        <div className='radio'>
          <label>
            <input type="radio" id="return" name="choice" onChange={this.handleOptionChange.bind(this)}/>
            return
          </label>
          <label>
            <input type="radio" id="oneway" name="choice" onChange={this.handleOptionChange.bind(this)} />
            one way
          </label>
          <label>
            <input type="radio" id="multicity" name="choice"  onChange={this.handleOptionChange.bind(this)}/>
            multi-city
          </label>
       </div>
        {this.handleForms()}
    </form>
    </div>
  )
  }
}


export default HomePage;
