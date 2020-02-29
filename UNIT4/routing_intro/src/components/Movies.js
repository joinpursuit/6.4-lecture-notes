// Write a component that gets all movies from 
// studio ghibli and posts them as a ul with li's . 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
   const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async (url) => {
            try {
                let res= await axios.get(url);
                setMovies(res.data);
            } catch (error) {
                setMovies([]);
            }
        }
        fetchMovies("https://ghibliapi.herokuapp.com/films")
    }, [])

    const moviesDisplay =  movies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>
    })
    return (  
        <ul>
            {moviesDisplay}
        </ul>
    );
}
 
export default Movies;