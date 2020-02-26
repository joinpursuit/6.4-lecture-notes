import React, { Component } from 'react';
import axios from 'axios';
import Dog from './Dog';
class DogsByBreed extends Component {
    state = { dogPics: [], numberOfDogs: 10  }

    componentDidUpdate(prevProps) {
        const oldBreed = prevProps.breed; 
        const newBreed = this.props.breed; 
        const numberOfDogs = this.state.numberOfDogs;
        if(oldBreed !== newBreed) {
            this.getDogPics(newBreed, numberOfDogs);
        }
    }

    getDogPics = async (breed, numberOfDogs) => {
        const breedURL = `https://dog.ceo/api/breed/${breed}/images/random/${numberOfDogs}`;
        try {
            let res = await axios.get(breedURL);
            this.setState({dogPics: res.data.message})
        } catch (error) {
            this.setState({dogPics: []});
        }
    }
    render() { 
        let dogs = this.state.dogPics.map(dog => {
            return <Dog img={dog} key={dog}/>
        })
        return ( 
            <div>
                {dogs}
            </div>
         );
    }
}
 
export default DogsByBreed;