import React, { Component } from 'react';

const counterFunction = (WrappedComponent, incrementVal) => {
    class CounterFunction extends Component {
        constructor(props){
            super(props);
            this.state = {
                count:0
            }
        }

        incrementCount = () => {
            this.setState(prevState =>{
                return { count: prevState.count+incrementVal}
            })
        }

        render(){
            return(<WrappedComponent count={this.state.count} 
                incrementCount={this.incrementCount} {...this.props}/>)
        }
    }
    return CounterFunction
}

export default counterFunction;    