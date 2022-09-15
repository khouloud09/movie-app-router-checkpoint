import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({ setSearchTerm}) => {
  return (
    <div className='navigation'>
        <div className='logo'>
            <img src="./logo.png" alt="logo" />
        </div>
<div className='menu'>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/Movies">MOVIES</Link>
            </li>
        </ul>
        </div>
       <div className="search">
            <input type="text" placeholder='Search...'   onChange={(event) => {
            setSearchTerm(event.target.value);}}  />
       </div>
       </div>

  )
}

export default Navbar