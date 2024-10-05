import React, { useState } from "react";

const MoviesList = () => {
  // List of movies and their descriptions
  const [movies] = useState([
    "Movie1",
    "Movie2",
    "Movie3",
    "Movie4",
    "Movie5",
  ]);
  const [descriptions] = useState([
    "Description 1",
    "Description 2",
    "Description 3",
    "Description 4",
    "Description 5",
  ]);

  // State to store the visibility of the description for each movie (boolean for each movie)
  const [showingDescription, setShowingDescription] = useState(
    Array(movies.length).fill(false) // Initialize with all descriptions hidden (false)
  );

  // Toggle the description for a specific movie
  const toggleDescription = (index) => {
    const updatedDescriptions = [...showingDescription];
    updatedDescriptions[index] = !updatedDescriptions[index]; // Toggle the value for that movie
    setShowingDescription(updatedDescriptions); // Update the state with new values
  };

  return (
    <div>
      <ul>
        {/* Map through the movies and display each title */}
        {movies.map((movie, index) => (
          <li key={index}>
            {/* Clicking on the movie title toggles its description */}
            <span
              onClick={() => toggleDescription(index)} // Toggle description on click
              style={{ cursor: "pointer" }}
            >
              {movie}
            </span>
            {/* Conditionally show the description if the specific movie's toggle is true */}
            {showingDescription[index] && ` - ${descriptions[index]}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
