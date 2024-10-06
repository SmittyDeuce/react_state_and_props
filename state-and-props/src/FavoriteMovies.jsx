import React, { useState } from "react";

const MoviesList = () => {
  // List of movies, their descriptions, and their genres
  const [movies, setMovies] = useState([
    { title: "Movie1", genre: "Action" },
    { title: "Movie2", genre: "Horror" },
    { title: "Movie3", genre: "Action" },
    { title: "Movie4", genre: "Drama" },
    { title: "Movie5", genre: "Comedy" },
  ]);

  const [descriptions] = useState([ // Static array of descriptions for each movie
    "Description 1",
    "Description 2",
    "Description 3",
    "Description 4",
    "Description 5",
  ]);

  // State to track whether each movie's description is being shown
  const [showingDescription, setShowingDescription] = useState(
    Array(movies.length).fill(false) // Initialize with all descriptions hidden (false)
  );

  const [showAll, setShowAll] = useState(true); // State to toggle between all movies and specific genre

  // Toggle the description for a specific movie
  const toggleDescription = (index) => {
    const updatedDescriptions = [...showingDescription];
    updatedDescriptions[index] = !updatedDescriptions[index]; // Toggle the value for that movie
    setShowingDescription(updatedDescriptions); // Update the state with new values
  };

  // Function to remove a movie from the list
  const handleRemoveMovie = (index) => {
    // Update movies state by filtering out the movie at the specified index
    setMovies((currentMovies) => currentMovies.filter((_, i) => i !== index));

    // Update the showingDescription state by filtering out the corresponding description
    setShowingDescription((currentShowing) =>
      currentShowing.filter((_, i) => i !== index)
    );
  };

  // Toggle the view between all movies and the "Action" genre
  const toggleView = () => {
    setShowAll((prevShowAll) => !prevShowAll); // Switch between true and false
  };

  return (
    <div>
      {/* Button to toggle between viewing all movies and only action movies */}
      <button onClick={toggleView}>
        {showAll ? "Show Action Movies" : "Show All Movies"}
      </button>
      <ul>
        {/* Map through the movies and display each title based on the current view */}
        {movies
          .filter((movie) => showAll || movie.genre === "Action") // Filter movies based on the toggle state
          .map((movie, index) => (
            <li key={index}>
              {/* Clicking on the movie title toggles its description */}
              <span
                onClick={() => toggleDescription(index)} // Toggle description on click
                style={{ cursor: "pointer" }}
              >
                {movie.title}
              </span>
              {/* Conditionally show the description if the specific movie's toggle is true */}
              {showingDescription[index] && ` - ${descriptions[index]}`}
              <button onClick={() => handleRemoveMovie(index)}>Remove</button> {/* Button to remove the movie */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
