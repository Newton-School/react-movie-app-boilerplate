import React, { useEffect, useMemo, useState } from 'react'
import '../styles/App.css';
import SearchBar from './SearchBar';
import { MoviesList, MovieDetails } from './MoviesList&Detail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [sortBy, setSortBy] = useState("ascending");
  const [selectedMovie, setSelectedMovie] = useState("");

  return (
    <div id="main">
      <h1>Movie Search</h1>
      <SearchBar />
      <button className="sort-btn">Sort Movies by release year ({sortBy})</button>
      <MoviesList />
      <section className='movie-details'>
        <MovieDetails />
      </section>
    </div>
  )
}

export default App;
