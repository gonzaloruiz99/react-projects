import React from 'react'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <>
    <ul className='projects-box'>
      <li><Link to="/react-projects/">Home</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Menu">Menu</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Countries">Countries</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Tictactoe">Tictactoe</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Shorten">Shorten</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Bookmark">Bookmark</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Rockpaper">Rockpaper</Link></li>
    </ul>
    <ul>
      <li><Link to="/react-projects/Todoapp">Todoapp</Link></li>
    </ul>
      


    </>
  )
}

export default Home