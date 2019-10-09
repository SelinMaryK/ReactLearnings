import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment = () =>{
        this.setState(prevState => ({
            count:prevState.count+1
        }),()=>{
            console.log('After callback',this.state.count);
        })
        console.log('Before', this.state.count);
    }
    incrementThree = () =>{
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count = {this.state.count}</div>
                <button onClick={()=>this.incrementThree()}>INCREMENT</button>
            </div>
        )
    }
}

export default Counter
