import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Dog from './Dog';
const DogsByBreed = ({breed}) => {
    const [ dogPics, setDogPics ] = useState([]);
    const [numberOfDogs, setNumberOfDogs] = useState(10)
    // const [ didMount, setDidMount ] = useState(false);
    const didMount = useRef(false);
    
    const getDogPics = async (breed, numberOfDogs) => {
        const breedURL = `https://dog.ceo/api/breed/${breed}/images/random/${numberOfDogs}`;
        try {
            let res = await axios.get(breedURL);
            setDogPics(res.data.message)
        } catch (error) {
            setDogPics([])
        }
    }

    useEffect(() => {
        if(didMount.current) {
            getDogPics(breed, numberOfDogs);
        } else {
            didMount.current = true;
            // setDidMount(true);
        }
    }, [breed])

    let dogs = dogPics.map(dog => {
        return <Dog img={dog} key={dog}/>
    })
    return ( 
        <div>
            {dogs}
        </div>
        );
}
 
export default DogsByBreed;