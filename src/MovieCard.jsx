import React from 'react';

// object destructuring to help w less typing 
const MovieCard = ({ movie }) => {
    return(
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        
        <div>
            <img 
            // 'N/A' is how this api indicates that there is no poster, in the occurence of this we will use a placeholder image.
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                alt={movie.Title}
            />
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;