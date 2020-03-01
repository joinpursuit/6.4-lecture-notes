import React from 'react';

const Car = ({ brand, model, year }) => {
    return (
        <li >
            Brand: {brand}
            model: {model}
            year: {year}
        </li>
    )
}

export default Car; 