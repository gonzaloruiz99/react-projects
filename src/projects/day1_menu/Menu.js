import React from 'react';

const Menu = ({items}) => {
  return (
    <>
    <div className="section-center">
      {items.map((item)=>{
      const {id, title, price, img, desc} = item;

      return (
      <article key={id} className="menu-item">
        <img  src={img} className="photo" alt={title}/>
        <div className="item-info">
          <header>
            <h3>{title}</h3>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
      ) 
    })}
    </div>
    
    </>
  )
};

export default Menu;
