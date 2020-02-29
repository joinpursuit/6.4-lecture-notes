import React, { useState } from 'react';
import DogsByBreed from './DogsByBreed';
import DogSelector from './DogSelector';

const DogApp = () => {
  const [breed, setBreed] = useState("");
  const handleBreed = breed => setBreed(breed);

  return (
    <div className="App">
    <DogSelector breed={breed} handleBreed={handleBreed }/>
    <DogsByBreed breed={breed} />
  </div>
);
}
 
export default DogApp;