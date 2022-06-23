import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// global variables must be CAPITALIZED AND SNAKE_CASE
//OMDB API KEY: 3b16b31
const API_URL = 'http://www.omdbapi.com?apikey=3b16b31';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // async await, lets us fetch api data with the syntactic sugar of a function.
    // async keyword informs the app returns a promise, and the await keyword makes JS wait until that promise settles and returns its result.
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);

        const data = await response.json();

        setMovies(data.Search);
    }

    // useEffect takes in a callback function and a dependency array, blank if we want it to only run at initial render.
    useEffect(() => {
        searchMovies('');
    },[])

    return(
        <div className="app">
            <h1>& Chill</h1>
            <div className="search">
                <input
                // every input in react needs these 3 things
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                // every img in react needs an alt for screen readers
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}


        </div>
    );
}

export default App;