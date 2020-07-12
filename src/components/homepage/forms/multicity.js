import React, { Component } from 'react';

class MultiCity extends Component{
    constructor(props){
        super(props);
        this.state={
           from:"",
           from1:"",
           to:"",
           to1:"",
           depart:"",
           depart1:""
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    } 

    render(){
        return(
            <div>
                <form>
                  <input type="text" placeholder="from" name="from" value={this.state.from} id="from" onChange={this.handleChange.bind(this)}/><br></br>
                  <input type="text" placeholder="to" name="to" value={this.state.to} id="to" onChange={this.handleChange.bind(this)}/><br></br>
                  <input type="date" name="depart" value={this.state.depart} id="depart" onChange={this.handleChange.bind(this)}/><br></br>
                  <input type="text" placeholder="from" name="from1" value={this.state.from1} id="from1" onChange={this.handleChange.bind(this)}/><br></br>
                  <input type="text" placeholder="to" name="to1" value={this.state.to1} id="to1" onChange={this.handleChange.bind(this)}/><br></br>
                  <input type="date" name="depart1" value={this.state.depart1} id="depart1" onChange={this.handleChange.bind(this)}/><br></br> 
                  <button >Search</button>
               </form>
            </div>
        )
    }
}

export default MultiCity;