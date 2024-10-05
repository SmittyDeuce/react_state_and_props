import React, { useState } from "react";

const MoviesList = (props) => {
  // Initialize state with a list of movies and their descriptions
  const [movies, setMovies] = useState([
    "Movie1",
    "Movie2",
    "Movie3",
    "Movie4",
    "Movie5",
  ]);
  const [description, setDescription] = useState([
    "Horror",
    "Action",
    "Comedy",
    "Romance",
    "Drama",
  ]);

  // State to toggle the description visibility
  const [showingDescription, setShowingDescription] = useState(false);

  // Function to show descriptions
  const showDescription = () => {
    setShowingDescription(true);
  };

  // Function to hide descriptions
  const hideDescription = () => {
    setShowingDescription(false);
  };

  return (
    <div>
      {/* Toggle button to show/hide descriptions */}
      {!showingDescription ? (
        <button onClick={showDescription}>Show Description</button>
      ) : (
        <button onClick={hideDescription}>Hide Description</button>
      )}
      
      <ul>
        {/* Map through the movies and conditionally show descriptions */}
        {movies.map((movie, index) => (
          <li key={index}>
            {movie}
            {showingDescription && ` - ${description[index]}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
