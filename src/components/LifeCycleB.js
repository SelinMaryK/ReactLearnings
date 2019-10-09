import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Selin'
        }
        console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }
    render() {
        console.log('LifeCycleB Render')
        return (
            <div>
                LifeCycleB Render
            </div>
        )
    }
}

export default LifeCycleB
