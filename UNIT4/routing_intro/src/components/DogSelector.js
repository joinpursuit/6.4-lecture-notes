import React, { useState, useEffect } from 'react';
import axios from "axios";

const DogSelector  = ({breed, handleBreed}) => {
    const [ breeds, setBreeds ] = useState([]);

    const fetchBreeds = async () => {
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/list/all");
            setBreeds(Object.keys(res.data.message));
        } catch (error) {
            setBreeds([]);
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBreeds();
    }, [])

    const options = breeds.map(breed => {
        return <option value={breed} key={breed}>{breed}</option>
    })
    return ( 
        <select onChange={(e) => handleBreed(e.target.value)}
        value={breed}>
            <option value={""} disabled>Select Breed</option>
            {options}
        </select>
        );    
}
 
export default DogSelector;