import React from 'react';
import { useLocation } from 'react-router-dom';
import"./Description.css";

const Description = () => {
    const location = useLocation();
    const {movie}=location.state;
  return (
    <div className="description">
         <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
          width="550"
          height="350"
          className='video'
          src={movie.trailer}
          title="YouTube video player"
          display="initial"
          position="relative"
        
    
      ></iframe>
        </div>
  )
}

export default Description