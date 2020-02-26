import React, { Component } from 'react';
import axios from "axios";

class DogSelector extends Component {
    state = { breeds: [] };
    async componentDidMount() {
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/list/all");
            this.setState({breeds: Object.keys(res.data.message)})
        } catch (error) {
            this.setState({breeds: []});
            console.log(error);
        }
    }
    render() { 
        const options = this.state.breeds.map(breed => {
            return <option value={breed} key={breed}>{breed}</option>
        })

        const {handleBreed, breed} = this.props; 
        return ( 
            <select onChange={(e) => handleBreed(e.target.value)}
            value={breed}>
                <option value={""} disabled>Select Breed</option>
                {options}
            </select>
         );
    }
}
 
export default DogSelector;