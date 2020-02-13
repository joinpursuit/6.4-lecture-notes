import React from 'react';
import Person from './Person';

const People = ({ people }) => {
    people = people.map(person => {
        return <Person name={person.name} key={person.name}/>
    })
    return(
        <ul>
            {people}
        </ul>
    )
}

export default People; 