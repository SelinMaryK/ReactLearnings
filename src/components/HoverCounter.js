import React, {Component} from 'react';
import counterFunction from '../HOC/counterFunction.js'

class HoverCounter extends Component{
    render(){
        const { count, incrementCount } = this.props;
        return(<div>
                    <h1 onMouseOver={incrementCount}>
                        Hovered {count} times
                    </h1>
                    <h2>{this.props.name}</h2>
                </div>)
    }
}

export default counterFunction(HoverCounter,3);