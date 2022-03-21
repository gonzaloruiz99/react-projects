import { BrowserRouter, Route, Routes } from 'react-router-dom';



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
     <BrowserRouter>
      <Routes>
        <Route exact path="/react-projects/" element={<Home/>} />

        <Route exact path="/react-projects/Menu" element={<Menu/>} />
        <Route exact path="/react-projects/Shorten" element={<Shorten/>} />
        <Route exact path="/react-projects/Countries" element={<Countries/>} />
        <Route exact path="/react-projects/Tictactoe" element={<Tictactoe/>} />
        <Route exact path="/react-projects/Bookmark" element={<Bookmark/>} />
        <Route exact path="/react-projects/Rockpaper" element={<Rockpaper/>} />
        <Route exact path="/react-projects/TodoApp" element={<TodoApp/>} /> 
      </Routes>
  </BrowserRouter>
  )
}

export default App;
