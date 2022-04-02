import React from 'react'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <>
    <ul className='projects-box'
    style={{
      backgroundColor: "rgb(44, 44, 44)",
      height: "100vh",
      width: "100%",
      color: "aliceblue",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Menu">Menu</Link></li>
      <li><Link to="/Countries">Countries</Link></li>
      <li><Link to="/Tictactoe">Tictactoe</Link></li>
      <li><Link to="/Shorten">Shorten</Link></li>
      <li><Link to="/Bookmark">Bookmark</Link></li>
      <li><Link to="/Rockpaper">Rockpaper</Link></li>
      <li><Link to="/Todoapp">Todoapp</Link></li>
    </ul>



    </>
  )
}

export default Home