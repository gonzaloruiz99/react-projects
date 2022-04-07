import React, { useState,useEffect } from 'react';
import Attribution from './Attribution';

import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import DarkMode from './darkMode';


/*
En este archivo:
. Crear un nuevo array desde otro, sin repetidos -> new Set
. Filtrar un array.map 
. Mostrar items de un json con .map y ${}

*/




function App() {


  useEffect(()=>{
      var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./styles/menu.css";
      
        document.head.appendChild(link);
        document.title = "Menu Filter | GR projects";
      }, [])

  




  const [menuItems, setMenuItems] = useState(items);

  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }

  return (
  <>

  <main>

    
    <section className="menu section">
      <div className="title">
        <DarkMode></DarkMode>
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      
      
      <Categories categories={categories} filterItems={filterItems}></Categories>
      <Menu items={menuItems} ></Menu>
    </section>
  </main>
  <Attribution></Attribution>
  </>
  )
}

export default App;
