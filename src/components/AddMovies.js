import React,{useState} from 'react';
import './AddMovies.css';

const AddMovies = ({setShowModal, setMovie, movie}) => {
    const [newmovie, setNewmovie]=  useState({ });
    const handleChange=(e) => {setNewmovie({...newmovie,[e.target.name]:e.target.value})
    e.preventDefault();
}
  return (
    <div className='AddMovie-container'>
        <h1 onClick={()=> setShowModal(false)}  id='close'>X</h1>
    <h1>Add New Movie</h1>
      <form>
<input name='title' type="text" placeholder='Type title...'
onChange={handleChange} />
<input name='description' type="text" placeholder='Type description...'
onChange={handleChange} />
<input name='posterURL' type="text" placeholder='Type poster...'
onChange={handleChange} />
<input name='rating' type="Number" max={5} placeholder='Type rating...'
onChange={handleChange} />
<button 
onClick={() =>{
setMovie([...movie, newmovie]) ; setShowModal(false);} } > Add Movie </button>
</form>
</div>
  )
}

export default AddMovies