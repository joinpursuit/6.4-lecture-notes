import React, { Component } from 'react';
import axios from 'axios';
import Dog from './Dog';

class DogApp extends Component {
    state = { img: "" };

    componentDidMount() {
        this.fetchPhoto();
    }
    
    fetchPhoto = async () => {
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/image/random")
            this.setState({img: res.data.message})
        } catch (error) {
            this.setState({img: ""});
            console.log(error);
        }
    }

    render() { 
        return ( 
            <div>
                <Dog img={this.state.img}/>
                <button onClick={this.fetchPhoto}>Get Random Dog</button>
            </div>
         );
    }
}
 
export default DogApp;