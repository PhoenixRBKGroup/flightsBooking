import React, { Component } from 'react';

class Return extends Component{
    constructor(props){
        super(props);
        this.state={ 
          form:"",
          to:"",
          depart:"",
          return:""
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
                  <input type="date" name="return" value={this.state.return} id="return" onChange={this.handleChange.bind(this)}/><br></br>
                  <button >Search</button>
               </form>
            </div>
        )
    }
}

export default Return;