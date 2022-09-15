import React ,{useState} from 'react'
import AddMovies from './AddMovies';
import { List } from './ListMovies';
import MovieCard from './MovieCard';
import './Home.css';


const Home = ({searchTerm}) => {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState(List);
  return (
    <div className="Home">

    <div className="movie-container">
        {movie.filter(el => el?.title?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        el.rating )
        .map((el,i) => (
            <MovieCard key={i} movie={el} />
        )

        )
}
</div>
<div className="add-button">
<button 
onClick={() => setShowModal(true)} > Add Movie </button>
{showModal && <AddMovies movie={movie} setMovie={setMovie} setShowModal={setShowModal}/>}
</div> 
        </div>
  )
}

export default Home