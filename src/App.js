import { HashRouter, Route, Routes } from 'react-router-dom';



import Menu from "./projects/day1_menu/App"
import Shorten from "./projects/day4_urlShortening/App"
import Countries from "./projects/day2_countries/App"
import Tictactoe from "./projects/day3_tictactoe/App"
import Bookmark from "./projects/day5_bookmark/App"
import Rockpaper from "./projects/day7_rockPaperSissor/App"
import TodoApp from "./projects/day8_toDoApp/App"

import Home from "./Home"



function App() {


  return(
     <HashRouter >
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route exact path="/Menu" element={<Menu/>} />
        <Route exact path="/Shorten" element={<Shorten/>} />
        <Route exact path="/Countries" element={<Countries/>} />
        <Route exact path="/Tictactoe" element={<Tictactoe/>} />
        <Route exact path="/Bookmark" element={<Bookmark/>} />
        <Route exact path="/Rockpaper" element={<Rockpaper/>} />
        <Route exact path="/TodoApp" element={<TodoApp/>} /> 
      </Routes>
  </HashRouter>
  )
}

export default App;
