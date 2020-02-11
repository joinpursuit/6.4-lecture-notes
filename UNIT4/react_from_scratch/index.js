import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root");

// const e = React.createElement 
// {'div',
//     {className: "gardent"},
//     "HELLO WORLD"
// }
const Person = ({name, age}) => {
    return(
        <div>
            Name: { name } 
            <br/>
            Age: { age }
        </div>
    )
}

const People = () => {
    let people = [
        {name: "Corey", age: 100},
         {name: "Jon", age: 26}, 
         {name: "Jhenya", age: 21}
        ]
        people = people.map((person, i) => {
            return <Person name={person.name} age={person.age} key={i}/>
        })
        return(
            people
        )
}

const App = () => {
    return(
        <div>
            This is our App
            <People/>
        </div>
    )
}

ReactDOM.render(<App />, root);