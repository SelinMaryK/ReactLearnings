import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef(); //Latest approach
        this.cbRef = null; // Old approach
        this.setCbRef = element => { //Old approach
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus(); //DOM node is directly accessed
        }
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }
    clickHandler =() =>{
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
