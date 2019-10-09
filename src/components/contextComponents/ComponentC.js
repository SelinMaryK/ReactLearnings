import React, { Component } from 'react'
import { UserConsumer } from './userContext';

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {(username)=>{
                        return <h2>Hello.... {username}</h2>
                    }}
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
