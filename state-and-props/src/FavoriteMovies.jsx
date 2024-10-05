import React, { useState } from 'react';

const MoviesList = (props) => {
    // Initialize state with a list of movies
    const  [movies,  setMovies] = useState(["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"])
    const [description, setDescription] = useState(["Horror", "Action", "Comedy", "Romance", "Drama"])
    
    const [showingDescription, setShowingDescription] = useState(false)

    const showDescription = () => {
        setShowingDescription(true)
    }



    
    // Implement required functionalities here

    return (
        <div>
            {!showingDescription}
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;