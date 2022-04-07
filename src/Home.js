import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"


const data = [

  {
    id: "Reactproject_RPS",
    name:"rock,paper,scissor",
    img:require("./home_images/rockpaper_img.png"),
    link: "Rockpaper",
  },
  {
    id: "Reactproject_TTT",
    name:"TicTacToe",
    img:require("./home_images/tictactoe_img.png"),
    link: "Tictactoe",
  },
  {
    id: "Reactproject_TDA",
    name:"ToDo App",
    img:require("./home_images/todo_img.png"),
    link: "Todoapp",
  },
  {
    id: "Reactproject_BM",
    name:"Bookmark",
    img:require("./home_images/bookmark_img.png"),
    link: "Bookmark",
  },
  {
    id: "Reactproject_CsApi",
    name:"Countries API",
    img:require("./home_images/countries_img.png"),
    link: "Countries",
  },
  {
    id: "Reactproject_MuAp",
    name:"Menu App",
    img:require("./home_images/menu_img.png"),
    link: "Menu",
  },
  {
    id: "Reactproject_SnLs",
    name:"Shorten Links",
    img:require("./home_images/shorter_img.png"),
    link: "Shorten",
  },
  
]



const Home = () => {
  return (
    
    <div className="home-container">


    <h1 class="home-title">REACT PROJECTS <span>made by <a href="https://gonzaloruiz99.github.io/portfolio_1.1/"  target="_blank" rel='noreferrer'
         >Gonzalo Ruiz</a></span>
    </h1>
    <ul className='projects-box'>
      {data.map((project)=>{
        return <li key={project.id} className="home-project">
            <Link to={project.link} className='home-project_link'>
              <p className="home-project_name">{project.name}</p>
              <img className="home-project_img" src={project.img} alt={project.name} />
            </Link>
        </li>
      })}
    </ul>



    </div>
  )
}

export default Home