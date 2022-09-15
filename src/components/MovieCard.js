import React from 'react';
import './MovieCard.css';
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
        <div className='movie-poster'>
        <img src={movie.posterURL} alt="poster" /> 
        </div>
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div className='movie-rating'>
               
                <ReactStars
            count={5}
            value={movie.rating}
            edit={false}
            size={24}
            activeColor="#grey"
          />
                </div>
            </div>
            <Link className="card-link" to={`/description/${movie.title}`} state={{ movie }}>
        See more...
      </Link>
    </div>
  )
}

export default MovieCard