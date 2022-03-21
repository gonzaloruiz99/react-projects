import React from 'react'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <>
    <ul className='projects-box'>
      <li><Link to="/">Home</Link></li>
    </ul>
    <ul>
      <li><Link to="/Menu">Menu</Link></li>
    </ul>
    <ul>
      <li><Link to="/Countries">Countries</Link></li>
    </ul>
    <ul>
      <li><Link to="/Tictactoe">Tictactoe</Link></li>
    </ul>
    <ul>
      <li><Link to="/Shorten">Shorten</Link></li>
    </ul>
    <ul>
      <li><Link to="/Bookmark">Bookmark</Link></li>
    </ul>
    <ul>
      <li><Link to="/Rockpaper">Rockpaper</Link></li>
    </ul>
    <ul>
      <li><Link to="/Todoapp">Todoapp</Link></li>
    </ul>
      


    </>
  )
}

export default Home