import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childParam){
        alert(`Hello ${this.state.parentName} from ${childParam}`);
    }
    render() {
        return (
            <div>
                <ChildComponent  greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
