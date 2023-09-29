import React, { Component } from 'react';

class State extends Component {
    constructor()
    {
        super()
        this.state = {name:"Good Morning!",age:12};
    }
    ChngData=()=>{
        console.log("ChngData called");
        this.setState({name:"Welcome to Reactjs Class"})
    }
      
 
    render() {
        
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                           <h1>{this.state.name}</h1>
                           <button className='btn btn-primary' onClick={this.ChngData}>Click Me to change</button>

                           <h1>{this.state.age}</h1>
                           <button className='btn btn-success' onClick={()=>this.setState({age:17})}>click to change age</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default State;