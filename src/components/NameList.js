import React from 'react'
import Person from './Person';

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana'];
    // const nameList = names.map(name =><h2>{name}</h2>);
    // return <div>{nameList}</div>
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:'30',
            skills:'React'
        },
        {
            id:2,
            name:'Clark',
            age:'32',
            skills:'Vue'
        },
        {
            id:3,
            name:'Diana',
            age:'24',
            skills:'Angular'
        }
    ]
    const personList = persons.map(person =>(
        <Person key={person.id} person={person}/> 
    ))
    return <div>{personList}</div>
}

export default NameList
