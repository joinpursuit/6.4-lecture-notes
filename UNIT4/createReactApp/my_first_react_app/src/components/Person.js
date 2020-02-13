import React from 'react';
import "../css/Person.css";

const Person = ({ name }) => {    
    return(
        <div className={"person"}>
            Name: {name}
        </div>
    )
}

export default Person; 